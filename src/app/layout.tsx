import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
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
      <body className={josefinSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
