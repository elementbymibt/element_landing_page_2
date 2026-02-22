"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const CALENDLY_BASE_URL = "https://calendly.com/element-by-mibt/bojana";
const THANK_YOU_PATH = "/thank-you";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function BookPage() {
  const hasRedirectedRef = useRef(false);

  const redirectToThankYou = useCallback(() => {
    if (hasRedirectedRef.current) return;
    hasRedirectedRef.current = true;
    window.location.assign(THANK_YOU_PATH);
  }, []);

  const calendlyUrl = useMemo(() => {
    if (typeof window === "undefined") return CALENDLY_BASE_URL;

    const params = new URLSearchParams({
      hide_gdpr_banner: "1",
      embed_domain: window.location.hostname,
      embed_type: "Inline",
    });

    return `${CALENDLY_BASE_URL}?${params.toString()}`;
  }, []);

  useEffect(() => {
    const hasScheduledEvent = (raw: unknown): boolean => {
      if (typeof raw === "string") {
        if (raw.includes("calendly.event_scheduled")) return true;
        try {
          const parsed = JSON.parse(raw);
          return hasScheduledEvent(parsed);
        } catch {
          return false;
        }
      }

      if (!raw || typeof raw !== "object") return false;
      const payload = raw as Record<string, unknown>;
      const eventName = payload.event;
      if (typeof eventName === "string" && eventName === "calendly.event_scheduled") return true;

      // Fallback ako Calendly promeni shape payload-a.
      return JSON.stringify(payload).includes("calendly.event_scheduled");
    };

    const onMessage = (event: MessageEvent) => {
      if (!event.origin.includes("calendly.com")) return;
      if (hasScheduledEvent(event.data)) {
        redirectToThankYou();
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [redirectToThankYou]);

  useEffect(() => {
    const readIframeSrc = () => {
      const iframe = document.querySelector<HTMLIFrameElement>(".calendly-inline-widget iframe");
      const src = iframe?.getAttribute("src") ?? "";
      if (!src) return;

      let decoded = src;
      try {
        decoded = decodeURIComponent(src);
      } catch {
        decoded = src;
      }

      if (decoded.includes("calendly.com/url?") || decoded.includes("/thank-you")) {
        redirectToThankYou();
      }
    };

    const observer = new MutationObserver(readIframeSrc);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["src"] });

    const timer = window.setInterval(readIframeSrc, 1000);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [redirectToThankYou]);

  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#F5F1EA] text-[#3E332D]`}>
      <style jsx global>{`
        @import url("https://assets.calendly.com/assets/external/widget.css");

        .calendly-inline-widget,
        .calendly-inline-widget iframe {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

      <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B0D18]/70">Besplatne konsultacije</p>
            <h1 className={`${headingFont.className} mt-2 text-4xl leading-[0.92] text-[#3B0D18] md:text-5xl`}>
              Zakaži termin (15 min)
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex rounded-full border border-[rgba(216,203,184,0.95)] bg-[#EFE6D8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#3B0D18] transition-colors hover:bg-[#EDE4D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
          >
            Nazad
          </Link>
        </div>

        <section className="overflow-hidden rounded-3xl border border-[rgba(216,203,184,0.95)] bg-[#F5F1EA] shadow-[0_20px_34px_rgba(62,51,45,0.08)]">
          {/* Real Calendly embed. Kada je termin zakazan, automatski prebacujemo na /thank-you. */}
          <div className="h-[72vh] min-h-[640px] w-full md:h-[76vh] md:min-h-[700px]">
            <div className="calendly-inline-widget h-full w-full" data-url={calendlyUrl} />
          </div>
        </section>

        <p className="mt-4 text-sm text-[#3E332D]/70">
          Ako se widget ne učita, otvori direktno:
          {" "}
          <a
            href={CALENDLY_BASE_URL}
            className="font-semibold text-[#3B0D18] underline decoration-[#C9A35D] underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            calendly.com/element-by-mibt/bojana
          </a>
        </p>
      </div>
    </main>
  );
}
