"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/dictionaries";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const pathWithoutLocale = pathname.startsWith("/en")
    ? pathname.slice(3) || "/"
    : pathname.startsWith("/pt")
      ? pathname.slice(3) || "/"
      : pathname;
  const englishHref = `/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  const portugueseHref = pathWithoutLocale;

  return (
    <nav className="language-switch" aria-label="Language / Idioma">
      <Link
        aria-current={locale === "pt" ? "page" : undefined}
        className={locale === "pt" ? "language-option language-option-active" : "language-option"}
        href={portugueseHref}
        hrefLang="pt-BR"
      >
        PT
      </Link>
      <span aria-hidden="true" className="language-divider">/</span>
      <Link
        aria-current={locale === "en" ? "page" : undefined}
        className={locale === "en" ? "language-option language-option-active" : "language-option"}
        href={englishHref}
        hrefLang="en"
      >
        EN
      </Link>
    </nav>
  );
}
