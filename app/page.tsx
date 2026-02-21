"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

type CallType = "Google Meet" | "Poziv";

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

const CALENDLY_URL = "https://calendly.com/element-by-mibt/bojana";
const proofItems = [
  "3D pre kupovine",
  "Jasna lista odluka",
  "Manje grešaka, manje bacanja novca",
];

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [callType, setCallType] = useState<CallType>("Google Meet");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowFloating(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={`${bodyFont.className} min-h-screen bg-[#F5F1EA] text-[#3E332D]`}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes cta-pop-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cta-pulse-bounce {
          0%,
          76%,
          100% {
            transform: translateY(0);
            box-shadow: 0 12px 24px rgba(59, 13, 24, 0.2), 0 0 0 0 rgba(201, 163, 93, 0);
          }
          82% {
            transform: translateY(-4px);
            box-shadow: 0 18px 30px rgba(59, 13, 24, 0.24), 0 0 0 8px rgba(201, 163, 93, 0.15);
          }
          90% {
            transform: translateY(0);
            box-shadow: 0 12px 24px rgba(59, 13, 24, 0.22), 0 0 0 14px rgba(201, 163, 93, 0);
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .floating-cta-in {
          animation: cta-pop-in 500ms ease-out both, cta-pulse-bounce 7s ease-in-out 700ms infinite;
        }

        .modal-in {
          animation: modal-in 220ms ease-out both;
        }
      `}</style>

      <header
        className={`sticky top-0 z-40 border-b border-[rgba(216,203,184,0.55)] bg-[#F5F1EA]/95 backdrop-blur transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_8px_20px_rgba(62,51,45,0.08)]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <span className={`${headingFont.className} text-3xl tracking-[0.16em] text-[#3B0D18]`}>ÉLÉMENT</span>
          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-[#C9A35D] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(59,13,24,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA] md:px-5"
          >
            Zakaži 15 min
          </button>
        </div>
      </header>

      <main>
        <section className="relative border-b border-[rgba(216,203,184,0.55)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(216,203,184,0.34),transparent_40%),radial-gradient(circle_at_88%_14%,rgba(201,163,93,0.15),transparent_30%)]" />
          <div className="mx-auto grid min-h-[78svh] w-full max-w-6xl gap-10 px-5 py-10 md:grid-cols-[1.08fr_1fr] md:items-center md:gap-12 md:px-8 md:py-14">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B0D18]/65">Ne uči na svom novcu.</p>
              <h1 className={`${headingFont.className} mt-3 text-6xl leading-[0.9] text-[#3B0D18] md:text-7xl`}>
                Pinterest nije plan.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3E332D]/88 md:text-lg">
                Saveti sa svih strana deluju sigurno, dok ne potrošiš i shvatiš da ne liči.
              </p>
              <p className="mt-4 text-sm font-semibold text-[#3B0D18]">Kod nas prvo vidiš 3D. Tek onda kupuješ.</p>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded-full bg-[#C9A35D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[#3B0D18] shadow-[0_12px_22px_rgba(59,13,24,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#d4b273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
                >
                  Zakaži BESPLATNE konsultacije (15 min)
                </button>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18]/65">
                  Bez obaveze. Konkretno. 15 minuta.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-[rgba(216,203,184,0.75)] bg-[linear-gradient(145deg,#F5F1EA_8%,#EFE6D8_52%,#D8CBB8_100%)] shadow-[0_20px_34px_rgba(62,51,45,0.12)]">
                {/* TODO: Ovde ubaciti realan video embed (YouTube/Vimeo). */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(201,163,93,0.2),transparent_34%),radial-gradient(circle_at_78%_74%,rgba(59,13,24,0.1),transparent_30%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(216,203,184,0.9)] bg-[#F5F1EA]/90">
                    <PlayIcon className="ml-1 h-7 w-7 text-[#3B0D18]" />
                  </span>
                  <span className="rounded-full border border-[rgba(216,203,184,0.8)] bg-[#3B0D18]/92 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C9A35D]">
                    Pogledaj video (30s)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EFE6D8]/55">
          <div className="mx-auto w-full max-w-6xl px-5 py-7 md:px-8 md:py-8">
            <div className="grid gap-3 md:grid-cols-3">
              {proofItems.map((item) => (
                <article
                  key={item}
                  className="rounded-full border border-[rgba(216,203,184,0.85)] bg-[#F5F1EA]/85 px-4 py-3 text-center text-sm font-semibold text-[#3E332D]"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div
        className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 md:bottom-6 md:left-auto md:right-6 md:translate-x-0 ${
          showFloating ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={openModal}
          className={`rounded-full bg-[#C9A35D] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18] transition-all hover:-translate-y-1 hover:shadow-[0_20px_28px_rgba(59,13,24,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA] md:text-sm ${
            showFloating ? "floating-cta-in" : ""
          }`}
        >
          Zakaži 15 min
        </button>
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-end bg-[#3E332D]/50 p-4 backdrop-blur-sm md:items-center md:justify-center"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="modal-in w-full max-w-lg rounded-3xl border border-[rgba(216,203,184,0.85)] bg-[#F5F1EA] p-6 shadow-[0_24px_40px_rgba(62,51,45,0.2)] md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="booking-title" className={`${headingFont.className} text-3xl text-[#3B0D18]`}>
                  Besplatne konsultacije (15 min)
                </h2>
                <p className="mt-1 text-sm text-[#3E332D]/88">Da doneseš jednu pravu odluku, pre troška.</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-[rgba(216,203,184,0.9)] px-3 py-1 text-sm font-semibold text-[#3B0D18] transition-colors hover:bg-[#EFE6D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D]"
                aria-label="Zatvori modal"
              >
                x
              </button>
            </div>

            {isSubmitted ? (
              <div className="mt-6 rounded-2xl border border-[rgba(216,203,184,0.9)] bg-[#EFE6D8]/65 p-5 text-center">
                <p className="text-base font-semibold text-[#3B0D18]">
                  Hvala! Javljamo se u roku od 24h da potvrdimo termin.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full border border-[rgba(216,203,184,0.9)] bg-[#F5F1EA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#3B0D18] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D]"
                >
                  Otvori Calendly
                </a>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                {/* TODO: Integrisati realno zakazivanje preko Calendly/API. Trenutni link: https://calendly.com/element-by-mibt/bojana */}
                <fieldset>
                  <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18]/65">Način</legend>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {(["Google Meet", "Poziv"] as const).map((option) => (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center justify-center rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                          callType === option
                            ? "border-[#3B0D18] bg-[#3B0D18]/6 text-[#3B0D18]"
                            : "border-[rgba(216,203,184,0.95)] bg-white/70 text-[#3E332D]"
                        }`}
                      >
                        <input
                          type="radio"
                          className="sr-only"
                          name="callType"
                          checked={callType === option}
                          onChange={() => setCallType(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18]/65">
                    Ime*
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-xl border border-[rgba(216,203,184,0.95)] bg-white px-3 py-2.5 text-sm text-[#3E332D] outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.5)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18]/65">
                    Email*
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-[rgba(216,203,184,0.95)] bg-white px-3 py-2.5 text-sm text-[#3E332D] outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.5)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18]/65">
                    Telefon (opciono)
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-[rgba(216,203,184,0.95)] bg-white px-3 py-2.5 text-sm text-[#3E332D] outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.5)]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#3B0D18] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#C9A35D] transition-all hover:bg-[#491520] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
                >
                  Pošalji zahtev
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
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
