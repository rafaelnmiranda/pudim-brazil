import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { media } from "@/content/media";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  // Peso suficiente para títulos elegantes; evitamos excesso de variações por performance.
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Pudim Brazil | Um pedaço do céu em forma de pudim",
    template: "%s | Pudim Brazil",
  },
  description:
    "Pudins artesanais premium, com sofisticação e cuidado em cada detalhe. Pedido exclusivo via WhatsApp.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Pudim Brazil | Um pedaço do céu em forma de pudim",
    description:
      "Pudins artesanais premium, com sofisticação e cuidado em cada detalhe. Pedido exclusivo via WhatsApp.",
    images: media.hero
      ? [
          {
            url: media.hero,
            width: 1600,
            height: 1000,
            alt: "Pudim Brazil",
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pudim Brazil | Um pedaço do céu em forma de pudim",
    description:
      "Pudins artesanais premium, com sofisticação e cuidado em cada detalhe. Pedido exclusivo via WhatsApp.",
    images: media.hero ? [media.hero] : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} antialiased bg-background text-foreground`}
      >
        <Header logo={media.logo} />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
