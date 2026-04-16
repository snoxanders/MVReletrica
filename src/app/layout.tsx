import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MVR - Remodelações e Eletricidade em Lisboa | Orçamentos Grátis",
  description:
    "Serviços profissionais de eletricidade e remodelação em Lisboa. Instalações elétricas, remodelação de apartamentos, cozinhas e casas de banho. Peça orçamento grátis.",
  keywords: [
    "eletricista lisboa",
    "remodelação apartamento lisboa",
    "remodelação cozinha",
    "remodelação casa de banho",
    "instalação elétrica",
    "eletricista famões",
    "remodelação odivelas",
    "eletricista amadora",
    "remodelações lisboa",
    "obras e remodelações",
  ],
  authors: [{ name: "MVR - Remodelações e Eletricidade" }],
  openGraph: {
    title: "MVR - Remodelações e Eletricidade em Lisboa",
    description:
      "Transformamos espaços com soluções elétricas e remodelações profissionais. Peça orçamento grátis.",
    type: "website",
    locale: "pt_PT",
    siteName: "MVR - Remodelações e Eletricidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
