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
  title: {
    default: "JESSICA BANDEIRA",
    template: "JESSICA BANDEIRA | %s",
  },
  description:
    "Sou a Jessica! Desenvolvedora Web especializada em Frontend, dedicada em unir arte e funcionalidades para criar experiências digitais incríveis.",
  icons: {
    icon: "/favicon.png",
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
