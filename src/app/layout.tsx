import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessica Bandeira",
  description:
    "Sou a Jessica! Aqui você encontra todos os links importantes e maneiras de entrar em contato comigo de forma rápida e fácil.",
    icons: {
      icon: '/favicon.jpg'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={alegreya.className}
      >
        {children}
      </body>
    </html>
  );
}
