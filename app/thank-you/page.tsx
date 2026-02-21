import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";

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

export default function ThankYouPage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#F5F1EA] text-[#3E332D]`}>
      <div className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-5 py-12 md:px-8">
        <section className="w-full rounded-3xl border border-[rgba(216,203,184,0.9)] bg-[linear-gradient(160deg,#F5F1EA_0%,#EFE6D8_100%)] p-8 text-center shadow-[0_20px_34px_rgba(62,51,45,0.1)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B0D18]/65">Potvrda zakazivanja</p>
          <h1 className={`${headingFont.className} mt-3 text-5xl leading-[0.95] text-[#3B0D18] md:text-6xl`}>Hvala na prijavi.</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#3E332D]/90 md:text-lg">
            Vaš termin je uspešno evidentiran. Javljamo se u roku od 24h sa potvrdom i sledećim korakom.
          </p>

          {/* TODO: Ovde dodati Google Ads conversion tag/event za confirmation page. */}

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#3B0D18] px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[#C9A35D] shadow-[0_12px_20px_rgba(59,13,24,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_26px_rgba(59,13,24,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A35D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
          >
            Nazad na početnu
          </Link>
        </section>
      </div>
    </main>
  );
}
