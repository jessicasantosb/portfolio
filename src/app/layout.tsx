import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "JESSICA BANDEIRA",
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
      <body className={sourceSerif.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
