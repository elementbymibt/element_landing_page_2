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
const proofChips = ["Uštedi vreme", "Sačuvaj živce", "Manje grešaka, manje bacanja novca"];

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${bodyFont.className} min-h-screen bg-[#F5F1EA] text-[#3E332D]`}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes cta-breathe {
          0%,
          100% {
            transform: translateY(0);
            box-shadow: 0 14px 28px rgba(59, 13, 24, 0.2), 0 0 0 0 rgba(201, 163, 93, 0.28);
          }
          50% {
            transform: translateY(-4px);
            box-shadow: 0 20px 34px rgba(59, 13, 24, 0.24), 0 0 0 11px rgba(201, 163, 93, 0);
          }
        }

        @keyframes cta-breathe-strong {
          0%,
          100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 12px 24px rgba(59, 13, 24, 0.25), 0 0 0 0 rgba(201, 163, 93, 0.3);
          }
          34% {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 20px 34px rgba(59, 13, 24, 0.3), 0 0 0 12px rgba(201, 163, 93, 0);
          }
          54% {
            transform: translateY(1px) scale(0.99);
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
            opacity: 0.95;
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

        @keyframes chip-bounce {
          0%,
          100% {
            transform: translateY(0);
            box-shadow: 0 8px 14px rgba(62, 51, 45, 0.05);
          }
          50% {
            transform: translateY(-2px);
            box-shadow: 0 12px 18px rgba(62, 51, 45, 0.09);
          }
        }

        .jump-cta {
          position: relative;
          overflow: hidden;
          animation: cta-breathe 2.8s ease-in-out infinite;
        }

        .jump-cta-strong {
          position: relative;
          overflow: hidden;
          animation: cta-breathe-strong 1.55s cubic-bezier(0.24, 0.82, 0.28, 1) infinite;
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

        .jump-cta-strong::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 40%;
          background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.58) 45%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-220%) skewX(-18deg);
          animation: sheen-pass 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .euro-pop {
          display: inline-block;
          transform-origin: center;
          animation: euro-pulse 2.2s ease-in-out infinite;
        }

        .chip-soft {
          animation: chip-bounce 4.2s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`sticky top-0 z-40 border-b border-[rgba(216,203,184,0.72)] bg-[#F5F1EA]/95 backdrop-blur transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_10px_22px_rgba(62,51,45,0.09)]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center px-5 py-3 md:px-8">
          <div className="leading-none">
            <p className={`${headingFont.className} text-[2.1rem] tracking-[0.14em] text-[#3B0D18]`}>ÉLÉMENT</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.42em] text-[#8B8072]">by M · I · B · T</p>
          </div>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B0D18]/66">Ne uči na svom novcu.</p>
              <h1 className={`${headingFont.className} mt-3 text-6xl leading-[0.9] text-[#3B0D18] md:text-7xl`}>
                Pinterest nije plan.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3E332D]/90 md:text-lg">
                Saveti sa svih strana deluju sigurno - dok ne potrošiš sav novac i shvatiš da u svom domu nisi zadovoljan.
              </p>
              <p className="mt-4 max-w-xl text-sm font-semibold leading-relaxed text-[#3B0D18] md:text-base">
                Predupredi greške koje te koštaju <a href={CALENDLY_LINK} className="euro-pop text-[#C9A35D] underline decoration-[#C9A35D]/70 underline-offset-4">10.000€+</a> i vidi kako izgleda tvoj dom iz snova - pre nego što uđeš u njega.
              </p>

              <div className="mt-7">
                <a
                  href={CALENDLY_LINK}
                  className="jump-cta-strong inline-flex min-h-16 min-w-[18.5rem] items-center justify-center rounded-[0.85rem] border border-[#2A0711] bg-[#3B0D18] px-10 py-4 text-center text-[1.03rem] font-semibold tracking-[0.06em] text-[#F5F1EA] transition-all hover:-translate-y-1 hover:shadow-[0_20px_32px_rgba(59,13,24,0.24)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
                >
                  Zakaži BESPLATNE konsultacije (15 min)
                </a>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18]/66">Bez obaveze. Konkretno. 15 minuta.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EFE6D8]/52">
          <div className="mx-auto w-full max-w-6xl px-5 py-6 md:px-8">
            <div className="grid gap-3 md:grid-cols-3">
              {proofChips.map((item, index) => (
                <article
                  key={item}
                  className="chip-soft rounded-full border border-[rgba(216,203,184,0.92)] bg-[#F5F1EA]/92 px-4 py-3 text-center text-sm font-semibold text-[#3E332D]"
                  style={{ animationDelay: `${index * 220}ms` }}
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

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
