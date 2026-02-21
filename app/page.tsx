"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

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

const CALENDLY_LINK = "https://calendly.com/element-by-mibt/bojana";

const proofItems = [
  "Uštedi vreme",
  "Sačuvaj živce",
  "Manje grešaka, manje bacanja novca",
];

const bullets = [
  "Vidite prostor pre nego što platite",
  "Znate granicu pre nego što trošite",
  "Odluka je mirna, ne impulsivna",
];

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowFloating(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`${bodyFont.className} min-h-screen bg-[#F5F1EA] text-[#3E332D]`}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes cta-pop-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cta-breathe {
          0%,
          100% {
            transform: translateY(0);
            box-shadow: 0 14px 28px rgba(59, 13, 24, 0.2), 0 0 0 0 rgba(201, 163, 93, 0.26);
          }
          50% {
            transform: translateY(-4px);
            box-shadow: 0 20px 34px rgba(59, 13, 24, 0.24), 0 0 0 10px rgba(201, 163, 93, 0);
          }
        }

        @keyframes sheen-pass {
          0%,
          74%,
          100% {
            transform: translateX(-220%) skewX(-18deg);
            opacity: 0;
          }
          80% {
            opacity: 0.92;
          }
          90% {
            transform: translateX(260%) skewX(-18deg);
            opacity: 0;
          }
        }

        @keyframes euro-pulse {
          0%,
          82%,
          100% {
            transform: translateY(0);
            text-shadow: 0 0 0 rgba(201, 163, 93, 0);
          }
          88% {
            transform: translateY(-4px);
            text-shadow: 0 0 18px rgba(201, 163, 93, 0.45);
          }
        }

        .jump-cta {
          position: relative;
          overflow: hidden;
          animation: cta-breathe 2.8s ease-in-out infinite;
        }

        .jump-cta::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 40%;
          background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.56) 45%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-220%) skewX(-18deg);
          animation: sheen-pass 5.6s ease-in-out infinite;
          pointer-events: none;
        }

        .pop-in {
          animation: cta-pop-in 420ms ease-out both;
        }

        .euro-pop {
          animation: euro-pulse 5.2s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`sticky top-0 z-40 border-b border-[rgba(216,203,184,0.72)] bg-[#F5F1EA]/95 backdrop-blur transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_10px_22px_rgba(62,51,45,0.09)]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <span className={`${headingFont.className} text-3xl tracking-[0.16em] text-[#3B0D18]`}>ÉLÉMENT</span>
          <a
            href={CALENDLY_LINK}
            className="jump-cta rounded-full bg-[#C9A35D] px-4 py-2 text-xs font-semibold uppercase tracking-[0.11em] text-[#3B0D18] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(59,13,24,0.18)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA] md:px-5"
          >
            Zakaži 15 min
          </a>
        </div>
      </header>

      <main>
        <section className="relative border-b border-[rgba(216,203,184,0.72)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(216,203,184,0.34),transparent_42%),radial-gradient(circle_at_82%_14%,rgba(201,163,93,0.18),transparent_32%)]" />

          <div className="mx-auto grid min-h-[calc(100svh-64px)] w-full max-w-6xl gap-10 px-5 py-10 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14 md:px-8 md:py-12">
            <div className="relative z-10">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-[rgba(216,203,184,0.9)] bg-[linear-gradient(145deg,#F5F1EA_0%,#EFE6D8_50%,#D8CBB8_100%)] shadow-[0_22px_38px_rgba(62,51,45,0.12)]">
                {/* TODO: Ovde ubaciti realan video embed (YouTube/Vimeo). */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(201,163,93,0.2),transparent_34%),radial-gradient(circle_at_78%_74%,rgba(59,13,24,0.1),transparent_30%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(216,203,184,0.92)] bg-[#F5F1EA]/92">
                    <PlayIcon className="ml-1 h-7 w-7 text-[#3B0D18]" />
                  </span>
                  <span className="rounded-full border border-[rgba(216,203,184,0.85)] bg-[#3B0D18]/92 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C9A35D]">
                    Pogledaj video (30s)
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h1 className={`${headingFont.className} text-5xl leading-[1.05] text-[#3B0D18] md:text-7xl`}>
                Jedna pogrešna odluka može da vas košta <span className="euro-pop text-[#C9A35D]">30.000€.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3E332D]/90 md:text-lg">
                Odluke o prostoru se najčešće donose pre nego što vidite posledicu. Mi to menjamo.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-[#3E332D]/92 md:text-base">
                {bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#C9A35D]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold text-[#3B0D18] md:text-base">
                Predupredite greške koje vas koštaju <span className="euro-pop text-[#C9A35D]">10.000€+</span> pre nego što ih platite.
              </p>

              <div className="mt-7">
                <a
                  href={CALENDLY_LINK}
                  className="jump-cta inline-flex rounded-full bg-[#3B0D18] px-7 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[#C9A35D] shadow-[0_14px_24px_rgba(59,13,24,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_32px_rgba(59,13,24,0.24)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
                >
                  Zakažite besplatne konsultacije
                </a>
                <p className="mt-3 text-xs font-medium text-[#3E332D]/65">15 minuta. Bez obaveze. Bez prodaje na silu.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EFE6D8]/52">
          <div className="mx-auto w-full max-w-6xl px-5 py-6 md:px-8">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.2fr_auto]">
              {proofItems.map((item) => (
                <article
                  key={item}
                  className="rounded-full border border-[rgba(216,203,184,0.92)] bg-[#F5F1EA]/92 px-4 py-3 text-center text-sm font-semibold text-[#3E332D] shadow-[0_8px_14px_rgba(62,51,45,0.05)]"
                >
                  {item}
                </article>
              ))}

              <a
                href={CALENDLY_LINK}
                className="jump-cta inline-flex items-center justify-center rounded-full bg-[#C9A35D] px-5 py-3 text-sm font-semibold uppercase tracking-[0.11em] text-[#3B0D18] shadow-[0_12px_22px_rgba(59,13,24,0.16)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(59,13,24,0.22)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE6D8]"
              >
                Zakaži 15 min
              </a>
            </div>
          </div>
        </section>
      </main>

      <div
        className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 md:bottom-6 md:left-auto md:right-6 md:translate-x-0 ${
          showFloating ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <a
          href={CALENDLY_LINK}
          className={`jump-cta rounded-full bg-[#C9A35D] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18] transition-all hover:-translate-y-1 hover:shadow-[0_20px_30px_rgba(59,13,24,0.24)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA] md:text-sm ${
            showFloating ? "pop-in" : ""
          }`}
        >
          Zakaži 15 min
        </a>
      </div>
    </div>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 6.5v11l9-5.5-9-5.5z" fill="currentColor" />
    </svg>
  );
}
