"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

type ContactOption = "Google Meet" | "Poziv";

const problemItems = [
  "Pinterest nije plan.",
  "Savet majstora nije projekat.",
  "„Ličiće” nije garancija.",
];

const processSteps = [
  {
    step: "1",
    title: "Kratak razgovor",
    text: "15 minuta da uhvatimo prostor, stil i budžet bez lutanja.",
    icon: ChatIcon,
  },
  {
    step: "2",
    title: "3D vizualizacija",
    text: "Vidiš tačno kako izgleda pre ijedne kupovine.",
    icon: CubeIcon,
  },
  {
    step: "3",
    title: "Lista odluka za kupovinu",
    text: "Dobijaš jasan spisak šta uzimaš, šta ne uzimaš i zašto.",
    icon: ChecklistIcon,
  },
];

const portfolioItems = [
  "Dnevna",
  "Kuhinja",
  "Spavaća",
  "Kupatilo",
  "Trpezarija",
  "Ulazni hol",
];

const valuePoints = [
  {
    title: "kontinuitet",
    text: "Svaka prostorija priča istu priču.",
    icon: LinkIcon,
  },
  {
    title: "sistem",
    text: "Ne kupuješ napamet, već po planu.",
    icon: GridIcon,
  },
  {
    title: "mir u odluci",
    text: "Nema vraćanja unazad i duplih troškova.",
    icon: CalmIcon,
  },
];

const faqItems = [
  {
    question: "Šta dobijam u 15 min konsultacija?",
    answer:
      "Jasan sledeći korak za tvoj prostor: šta rešavamo prvo, koliko traje i šta je realan opseg ulaganja.",
  },
  {
    question: "Da li radite i samo jednu prostoriju?",
    answer:
      "Da. Možemo krenuti od jedne prostorije, pa širiti dalje kad vidiš da sistem radi.",
  },
  {
    question: "Koliko traje izrada 3D vizualizacije?",
    answer:
      "Najčešće 5 do 10 radnih dana, u zavisnosti od obima i broja izmena.",
  },
  {
    question: "Da li mogu da menjam predloge?",
    answer:
      "Da. U procesu su uključene revizije da finalna verzija odgovara tvom prostoru i načinu života.",
  },
  {
    question: "Da li dobijam listu za kupovinu?",
    answer:
      "Da. Dobijaš listu odluka za kupovinu, da znaš tačno šta ide u prostor i kojim redom.",
  },
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [contactOption, setContactOption] = useState<ContactOption>("Google Meet");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 8);
      setShowFloatingCta(y > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <div id="top" className="min-h-screen text-[var(--color-text)]">
      <header
        className={`sticky top-0 z-40 border-b border-[rgba(59,13,24,0.1)] bg-[rgba(245,241,234,0.92)] backdrop-blur transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_10px_26px_rgba(62,51,45,0.1)]" : ""
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="inline-flex flex-col leading-none">
            <span className="font-serif text-3xl tracking-[0.18em] text-[var(--color-gold)]">ÉLÉMENT</span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-taupe)]">
              by M·I·B·T
            </span>
          </a>

          <div className="flex items-center gap-5 text-sm font-medium text-[var(--color-text)]/85 md:gap-8">
            <a
              href="#kako-radi"
              className="transition-colors hover:text-[var(--color-bordeaux)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            >
              Kako radi
            </a>
            <a
              href="#primeri"
              className="transition-colors hover:text-[var(--color-bordeaux)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            >
              Primeri
            </a>
            <a
              href="#faq"
              className="transition-colors hover:text-[var(--color-bordeaux)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            >
              FAQ
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[rgba(59,13,24,0.1)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,163,93,0.16),transparent_45%),radial-gradient(circle_at_10%_80%,rgba(47,79,74,0.12),transparent_30%)]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14 md:px-8 md:py-20">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-taupe)]">
                Enterijer + 3D vizualizacija
              </p>
              <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[0.95] text-[var(--color-bordeaux)] md:text-7xl">
                Одлука пре новца.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text)]/90">
                3D vizualizacija prostora pre nego što potrošiš i dinar.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.04em] text-[var(--color-bordeaux)] shadow-[0_10px_22px_rgba(59,13,24,0.16)] transition-all hover:bg-[var(--color-gold-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bordeaux)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)]"
                >
                  Zakaži BESPLATNE konsultacije (15 min)
                </button>
                <a
                  href="#kako-radi"
                  className="text-sm font-semibold text-[var(--color-bordeaux)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-petrol)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                >
                  Vidi kako izgleda proces
                </a>
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--color-taupe)]">
                  <SparkIcon className="h-4 w-4 text-[var(--color-olive)]" />
                  Bez obaveze. Konkretno. 15 minuta.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-[rgba(59,13,24,0.14)] bg-[linear-gradient(145deg,var(--color-neutral),var(--color-beige-mid))] shadow-[var(--shadow-soft)]">
                {/* TODO: Ovde ubaciti realan video embed (YouTube/Vimeo iframe). */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(201,163,93,0.25),transparent_40%),radial-gradient(circle_at_80%_85%,rgba(47,79,74,0.2),transparent_35%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(59,13,24,0.25)] bg-[rgba(245,241,234,0.9)] shadow-md">
                    <PlayIcon className="ml-1 h-7 w-7 text-[var(--color-bordeaux)]" />
                  </span>
                  <span className="rounded-full bg-[rgba(59,13,24,0.82)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-gold)]">
                    Play
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[rgba(59,13,24,0.08)] py-14 md:py-18">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="max-w-2xl font-serif text-4xl text-[var(--color-bordeaux)] md:text-5xl">
              Imao si ideje. Nisi imao plan.
            </h2>
            <ul className="mt-8 grid gap-3 md:max-w-3xl">
              {problemItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[rgba(59,13,24,0.1)] bg-[rgba(245,241,234,0.72)] px-4 py-3 text-base text-[var(--color-text)]"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--color-bordeaux)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[rgba(59,13,24,0.08)] bg-[rgba(239,230,216,0.55)] py-14 md:py-18">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="max-w-2xl font-serif text-4xl text-[var(--color-bordeaux)] md:text-5xl">
              Platio si — pa tek onda video.
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text)]/90">
              I zato menjaš stvari posle 4 meseca.
            </p>
          </div>
        </section>

        <section id="kako-radi" className="border-b border-[rgba(59,13,24,0.08)] py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="max-w-3xl font-serif text-4xl text-[var(--color-bordeaux)] md:text-5xl">
              Prvo vidiš rezultat. Onda kupuješ.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-[rgba(59,13,24,0.12)] bg-[rgba(245,241,234,0.85)] p-6 shadow-[0_10px_22px_rgba(62,51,45,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-5xl leading-none text-[var(--color-bordeaux)]/65">{step.step}</span>
                    <step.icon className="h-6 w-6 text-[var(--color-olive)]" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-[var(--color-bordeaux)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]/85">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="primeri" className="border-b border-[rgba(59,13,24,0.08)] py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="max-w-3xl font-serif text-4xl text-[var(--color-bordeaux)] md:text-5xl">Primeri</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[var(--color-taupe)]">
              Pre kupovine vidiš svaki ugao
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <article
                  key={item}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(59,13,24,0.12)] bg-[linear-gradient(160deg,var(--color-neutral),var(--color-beige-mid))]"
                >
                  {/* TODO: Zameniti placeholder stvarnim renderima/projekt fotografijama. */}
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--color-bordeaux)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    3D
                  </span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,163,93,0.25),transparent_35%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-[rgba(59,13,24,0.1)] bg-[rgba(245,241,234,0.86)] px-4 py-3">
                    <h3 className="font-serif text-2xl text-[var(--color-bordeaux)]">{item}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[rgba(59,13,24,0.08)] py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="max-w-3xl font-serif text-4xl text-[var(--color-bordeaux)] md:text-5xl">
              Ne prodajemo komade. Slažemo celinu.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
              {valuePoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-[rgba(59,13,24,0.12)] bg-[rgba(245,241,234,0.88)] p-6"
                >
                  <point.icon className="h-6 w-6 text-[var(--color-petrol)]" />
                  <h3 className="mt-4 font-serif text-2xl text-[var(--color-bordeaux)]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/85">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-[rgba(59,13,24,0.08)] py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
            <h2 className="font-serif text-4xl text-[var(--color-bordeaux)] md:text-5xl">FAQ</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[rgba(59,13,24,0.12)] bg-[rgba(245,241,234,0.88)]">
              {faqItems.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <article key={faq.question} className="border-b border-[rgba(59,13,24,0.1)] last:border-b-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[rgba(216,203,184,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`text-xl text-[var(--color-bordeaux)] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-[var(--color-text)]/85">
                        {faq.answer}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
            <div className="rounded-3xl border border-[rgba(59,13,24,0.16)] bg-[linear-gradient(160deg,rgba(59,13,24,0.95),rgba(47,79,74,0.88))] px-6 py-10 text-center md:px-12 md:py-14">
              <h2 className="font-serif text-4xl text-[var(--color-gold)] md:text-6xl">Jedna prava odluka.</h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-[rgba(245,241,234,0.9)] md:text-lg">
                Da ne trošiš da bi učio.
              </p>
              <button
                type="button"
                onClick={openModal}
                className="mt-8 rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.04em] text-[var(--color-bordeaux)] transition-all hover:bg-[var(--color-gold-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bordeaux)]"
              >
                Zakaži BESPLATNE konsultacije (15 min)
              </button>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[rgba(245,241,234,0.8)]">
                Odluka pre novca. Prvo vidiš. Onda platiš.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(59,13,24,0.08)] px-5 py-6 text-center text-xs uppercase tracking-[0.14em] text-[var(--color-taupe)] md:px-8">
        ÉLÉMENT by M·I·B·T
      </footer>

      <div
        className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 md:bottom-6 md:left-auto md:right-6 md:translate-x-0 ${
          showFloatingCta ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={openModal}
          className="floating-attention rounded-full bg-[var(--color-bordeaux)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-gold)] shadow-[0_12px_28px_rgba(59,13,24,0.22)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)] md:text-sm"
        >
          Zakaži konsultacije
        </button>
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-end bg-[rgba(62,51,45,0.45)] p-4 backdrop-blur-sm md:items-center md:justify-center"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="fade-slide-up w-full max-w-lg rounded-3xl border border-[rgba(59,13,24,0.2)] bg-[var(--color-ivory)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 id="booking-modal-title" className="font-serif text-3xl text-[var(--color-bordeaux)]">
                Besplatne konsultacije (15 min)
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-[rgba(59,13,24,0.2)] px-3 py-1 text-sm font-semibold text-[var(--color-bordeaux)] transition-colors hover:bg-[rgba(59,13,24,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                aria-label="Zatvori modal"
              >
                ✕
              </button>
            </div>

            {/* TODO: Umesto lokalnog forme submit-a, povezati realan scheduler (npr. Calendly embed/API). */}
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-taupe)]">
                  Opcija termina
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {(["Google Meet", "Poziv"] as const).map((option) => (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors ${
                        contactOption === option
                          ? "border-[var(--color-bordeaux)] bg-[rgba(59,13,24,0.05)]"
                          : "border-[rgba(59,13,24,0.15)] bg-[rgba(245,241,234,0.7)]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="contactOption"
                        value={option}
                        checked={contactOption === option}
                        onChange={() => setContactOption(option)}
                        className="h-4 w-4 accent-[var(--color-bordeaux)]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-taupe)]">
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-[rgba(59,13,24,0.18)] bg-white px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.65)]"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-taupe)]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-[rgba(59,13,24,0.18)] bg-white px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.65)]"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-taupe)]">
                  Phone (optional)
                </span>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-xl border border-[rgba(59,13,24,0.18)] bg-white px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:shadow-[0_0_0_2px_rgba(201,163,93,0.65)]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[var(--color-bordeaux)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-gold)] transition-colors hover:bg-[rgba(59,13,24,0.93)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ivory)]"
              >
                Potvrdi termin
              </button>
            </form>

            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--color-taupe)]">
              Termin potvrđujemo u roku od 24h.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v4M12 17v4M4.9 6.9l2.8 2.8M16.3 14.3l2.8 2.8M3 12h4M17 12h4M4.9 17.1l2.8-2.8M16.3 9.7l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 6.5v11l9-5.5-9-5.5z" fill="currentColor" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v6A2.5 2.5 0 0117.5 15H10l-4 4v-4H6.5A2.5 2.5 0 014 12.5v-6z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ChecklistIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9.5 6h10M9.5 12h10M9.5 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.5 5.5l1.4 1.4L8 4.8M4.5 11.5l1.4 1.4L8 10.8M4.5 17.5l1.4 1.4L8 16.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M10.5 13.5l3-3M8 16a3 3 0 010-4.2l2.8-2.8a3 3 0 114.2 4.2M16 8a3 3 0 010 4.2l-2.8 2.8a3 3 0 11-4.2-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CalmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 13c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 17c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18.5" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}
