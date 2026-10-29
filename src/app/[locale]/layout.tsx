import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { dictionaries, resolveLocale } from "@/i18n/dictionaries";
import Script from "next/script";
import "../globals.css";

type LocaleParams = { params: Promise<{ locale: string }> };
type LayoutProps = LocaleParams & { children: React.ReactNode };

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = dictionaries[locale];

  return {
    title: {
      default: copy.siteTitle,
      template: locale === "pt" ? "Jéssica Bandeira | %s" : "Jessica Bandeira | %s",
    },
    description: copy.siteDescription,
    icons: { icon: "/favicon.png" },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const locale = await resolveLocale(params);
  const copy = dictionaries[locale];

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="site-body">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try { const theme = localStorage.getItem("portfolio-theme"); document.documentElement.dataset.theme = theme === "light" ? "light" : "dark"; } catch { document.documentElement.dataset.theme = "dark"; }`}
        </Script>
        <Header locale={locale} copy={copy.header} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} copy={copy.footer} />
      </body>
    </html>
  );
}
