import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ÉLÉMENT by M·I·B·T | 3D Vizualizacija Enterijera",
  description:
    "Odluka pre novca. Prvo vidiš. Onda platiš. 3D vizualizacija prostora pre kupovine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
