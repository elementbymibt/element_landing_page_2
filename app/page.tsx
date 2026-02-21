"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

type BookingMode = "Google Meet" | "Poziv";

const headingFont = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const proofBullets = [
  "Odluke bez plana.",
  "Kupovine bez celine.",
  "Menjanje posle useljenja.",
];

const steps = [
  {
    title: "15 min konsultacije",
    text: "Mapiramo prostor i presečemo šta je prioritet.",
  },
  {
    title: "3D vizualizacija",
    text: "Tačno vidiš rezultat pre prve kupovine.",
  },
  {
    title: "Lista odluka za kupovinu",
    text: "Kupuješ samo ono što ulazi u sistem.",
  },
];

const portfolio = ["Dnevna", "Kuhinja", "Spavaća"];

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState<BookingMode>("Google Meet");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 8);
      setShowFloatingCta(y > 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      id="top"
      className={`${bodyFont.className} min-h-screen bg-[linear-gradient(180deg,#F5F1EA_0%,#EFE6D8_52%,#EDE4D4_100%)] text-[#3E332D]`}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes cta-attention {
          0%,
          71% {
            transform: translateY(0);
            box-shadow: 0 12px 24px rgba(59, 13, 24, 0.2);
          }
          78% {
            transform: translateY(-4px);
            box-shadow: 0 16px 30px rgba(201, 163, 93, 0.34);
          }
          85% {
            transform: translateY(1px);
            box-shadow: 0 12px 24px rgba(59, 13, 24, 0.22);
          }
          92% {
            transform: translateY(-2px);
            box-shadow: 0 16px 30px rgba(201, 163, 93, 0.28);
          }
          100% {
            transform: translateY(0);
            box-shadow: 0 12px 24px rgba(59, 13, 24, 0.2);
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .cta-attention {
          animation: cta-attention 7s ease-in-out infinite;
        }

        .modal-in {
          animation: modal-in 280ms ease-out both;
        }
      `}</style>

      <header
        className={`sticky top-0 z-40 border-b border-[#3B0D18]/10 bg-[#F5F1EA]/95 backdrop-blur transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_12px_28px_rgba(62,51,45,0.09)]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="inline-flex items-end gap-2 leading-none">
            <span className={`${headingFont.className} text-3xl tracking-[0.18em] text-[#3B0D18]`}>ÉLÉMENT</span>
          </a>

          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-[#C9A35D] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#3B0D18] transition-all hover:bg-[#d4b273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA] md:px-5"
          >
            Zakaži 15 min
          </button>
        </div>
      </header>

      <main>
        <section className="relative border-b border-[#3B0D18]/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(216,203,184,0.4),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(201,163,93,0.16),transparent_34%)]" />
          <div className="mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.06fr_1fr] md:items-center md:gap-10 md:px-8 md:py-12">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B8072]">Sada vs Budućnost</p>
              <h1 className={`${headingFont.className} mt-3 text-5xl leading-[0.93] text-[#3B0D18] md:text-7xl`}>
                Одлука пре новца.
              </h1>
              <p className="mt-3 text-lg font-medium text-[#3B0D18]">Prvo vidiš. Onda platiš.</p>

              <div className="mt-6 space-y-2.5">
                <DialogueLine label="SADA" text="Imam Pinterest. Biće dobro." />
                <DialogueLine label="BUDUĆNOST" text="Neće." highlight />
                <DialogueLine label="SADA" text="Majstor kaže može." />
                <DialogueLine label="BUDUĆNOST" text="I potrošiš 30.000€. A ne liči." highlight />
                <DialogueLine label="BUDUĆNOST" text="Jedna prava odluka: prvo vidiš. onda platiš." highlight />
              </div>

              <div className="mt-7 space-y-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded-full bg-[#C9A35D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[#3B0D18] shadow-[0_10px_20px_rgba(59,13,24,0.16)] transition-all hover:bg-[#d4b273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B0D18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
                >
                  Zakaži BESPLATNE konsultacije (15 min)
                </button>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8072]">
                  Bez obaveze. Konkretno. 15 minuta.
                </p>
                <p className="text-sm font-medium text-[#3E332D]">3D pre kupovine. Bez skupih grešaka.</p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-[#3B0D18]/15 bg-[linear-gradient(155deg,#EDE4D4_0%,#D8CBB8_100%)] shadow-[0_18px_34px_rgba(62,51,45,0.12)]">
                {/* TODO: Ovde ubaci realan video embed (npr. YouTube/Vimeo iframe). */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(201,163,93,0.24),transparent_35%),radial-gradient(circle_at_78%_72%,rgba(47,79,74,0.18),transparent_32%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#3B0D18]/20 bg-[#F5F1EA]/90">
                    <PlayIcon className="ml-1 h-7 w-7 text-[#3B0D18]" />
                  </span>
                  <span className="rounded-full bg-[#3B0D18]/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C9A35D]">
                    Play
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#3B0D18]/10">
          <div className="mx-auto flex min-h-[72svh] w-full max-w-5xl flex-col justify-center px-5 py-10 md:px-8">
            <h2 className={`${headingFont.className} text-4xl text-[#3B0D18] md:text-5xl`}>
              Zašto ljudi izgube 4 meseca i živce?
            </h2>
            <ul className="mt-6 space-y-3">
              {proofBullets.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[#3B0D18]/10 bg-[#F5F1EA]/85 px-4 py-3 text-base font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xl font-bold text-[#3B0D18]">Ne troši da bi učio.</p>
          </div>
        </section>

        <section className="border-b border-[#3B0D18]/10">
          <div className="mx-auto flex min-h-[72svh] w-full max-w-6xl flex-col justify-center px-5 py-10 md:px-8">
            <h2 className={`${headingFont.className} text-4xl text-[#3B0D18] md:text-5xl`}>Sistem od 3 koraka.</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-[#3B0D18]/12 bg-[#F5F1EA]/88 p-5 shadow-[0_10px_20px_rgba(62,51,45,0.06)]"
                >
                  <p className={`${headingFont.className} text-4xl leading-none text-[#3B0D18]/55`}>{index + 1}</p>
                  <h3 className={`${headingFont.className} mt-3 text-2xl text-[#3B0D18]`}>{step.title}</h3>
                  <p className="mt-2 text-sm text-[#3E332D]/90">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#3B0D18]/10">
          <div className="mx-auto flex min-h-[72svh] w-full max-w-6xl flex-col justify-center px-5 py-10 md:px-8">
            <h2 className={`${headingFont.className} text-4xl text-[#3B0D18] md:text-5xl`}>Vidi pre nego što kupiš.</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {portfolio.map((room) => (
                <article
                  key={room}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#3B0D18]/12 bg-[linear-gradient(145deg,#EDE4D4_0%,#D8CBB8_100%)]"
                >
                  {/* TODO: Ovde ubaci realan 3D render/projekt fotografiju. */}
                  <span className="absolute left-3 top-3 rounded-full bg-[#3B0D18] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35D]">
                    3D
                  </span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(201,163,93,0.24),transparent_34%)]" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-[#3B0D18]/10 bg-[#F5F1EA]/88 px-4 py-3">
                    <h3 className={`${headingFont.className} text-2xl text-[#3B0D18]`}>{room}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto flex min-h-[70svh] w-full max-w-5xl flex-col justify-center px-5 py-12 md:px-8">
            <div className="rounded-3xl border border-[#3B0D18]/18 bg-[linear-gradient(160deg,rgba(59,13,24,0.96),rgba(47,79,74,0.85))] px-6 py-10 text-center md:px-10 md:py-12">
              <h2 className={`${headingFont.className} text-5xl text-[#C9A35D] md:text-6xl`}>Jedna prava odluka.</h2>
              <p className="mt-2 text-lg font-medium text-[#F5F1EA]">Odluka pre novca.</p>
              <p className="mt-1 text-sm text-[#F5F1EA]/90">Prvo vidiš. Onda platiš.</p>
              <button
                type="button"
                onClick={openModal}
                className="mt-7 rounded-full bg-[#C9A35D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[#3B0D18] transition-all hover:bg-[#d4b273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B0D18]"
              >
                Zakaži BESPLATNE konsultacije (15 min)
              </button>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F1EA]/85">Bez obaveze.</p>
            </div>
          </div>
        </section>
      </main>

      <div
        className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 md:bottom-6 md:left-auto md:right-6 md:translate-x-0 ${
          showFloatingCta ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={openModal}
          className="cta-attention rounded-full bg-[#3B0D18] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A35D] transition-all hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(59,13,24,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA] md:text-sm"
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
            className="modal-in w-full max-w-lg rounded-3xl border border-[#3B0D18]/18 bg-[#F5F1EA] p-6 shadow-[0_24px_44px_rgba(62,51,45,0.22)] md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="booking-title" className={`${headingFont.className} text-3xl text-[#3B0D18]`}>
                  Besplatne konsultacije (15 min)
                </h3>
                <p className="mt-1 text-sm font-medium text-[#3E332D]/90">Da prvo vidiš. Onda platiš.</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-[#3B0D18]/18 px-3 py-1 text-sm font-semibold text-[#3B0D18] transition-colors hover:bg-[#EFE6D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D]"
                aria-label="Zatvori"
              >
                ✕
              </button>
            </div>

            {isSubmitted ? (
              <div className="mt-7 rounded-2xl border border-[#3B0D18]/12 bg-[#EFE6D8]/80 p-5 text-center">
                <p className={`${headingFont.className} text-3xl text-[#3B0D18]`}>Zahtev je poslat.</p>
                <p className="mt-2 text-sm text-[#3E332D]/90">Odgovaramo u roku od 24h.</p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-5 rounded-full bg-[#3B0D18] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#C9A35D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
                >
                  Zatvori
                </button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                {/* TODO: Umesto lokalnog submit-a, ovde povezati realan Calendly/API flow. */}
                <fieldset>
                  <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B8072]">Način</legend>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {(["Google Meet", "Poziv"] as const).map((option) => (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                          bookingMode === option
                            ? "border-[#3B0D18] bg-[#3B0D18]/6 text-[#3B0D18]"
                            : "border-[#3B0D18]/15 bg-white/70 text-[#3E332D]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="bookingMode"
                          value={option}
                          checked={bookingMode === option}
                          onChange={() => setBookingMode(option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8072]">
                    Ime
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-xl border border-[#3B0D18]/18 bg-white px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.55)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8072]">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-[#3B0D18]/18 bg-white px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.55)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[#8B8072]">
                    Telefon (optional)
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-[#3B0D18]/18 bg-white px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.55)]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#3B0D18] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#C9A35D] transition-colors hover:bg-[#4a1421] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
                >
                  Pošalji zahtev
                </button>

                <p className="text-xs uppercase tracking-[0.12em] text-[#8B8072]">Odgovaramo u roku od 24h.</p>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DialogueLine({
  label,
  text,
  highlight = false,
}: {
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <p
      className={`rounded-xl border px-3 py-2 text-sm md:text-[15px] ${
        highlight
          ? "border-[#3B0D18]/15 bg-[#3B0D18]/5 text-[#3B0D18]"
          : "border-[#3B0D18]/10 bg-[#F5F1EA]/85 text-[#3E332D]"
      }`}
    >
      <span className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8B8072]">{label}:</span>
      <span className="font-medium">{text}</span>
    </p>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 6.5v11l9-5.5-9-5.5z" fill="currentColor" />
    </svg>
  );
}
