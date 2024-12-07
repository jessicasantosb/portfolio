import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Jessica Bandeira",
  description:
    "Sou a Jessica! Aqui você encontra todos os links importantes e maneiras de entrar em contato comigo de forma rápida e fácil.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${playfairDisplay.className} ${sourceSerif.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
