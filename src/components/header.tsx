import Link from "next/link";
import { LinkItem } from "./link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitch } from "./language-switch";
import { localizePath, type Dictionary, type Locale } from "@/i18n/dictionaries";

export function Header({ locale, copy }: { locale: Locale; copy: Dictionary["header"] }) {
  return (
    <header className="site-header page-wrap">
      <Link href={localizePath(locale, "/")} className="brand" aria-label={copy.homeLabel}>
        <span className="brand-mark">J<span>.</span></span><span className="brand-name">Jéssica Bandeira<small>{copy.tagline}</small></span>
      </Link>
      <nav className="main-nav" aria-label={copy.navLabel}>
        <LinkItem link={localizePath(locale, "/projects")} text={copy.projects} />
        <LinkItem link={localizePath(locale, "/contact")} text={copy.contact} />
        <LanguageSwitch locale={locale} />
        <ThemeToggle />
        <Link href={localizePath(locale, "/contact")} className="nav-availability">
          <span className="status-dot" /> {copy.availability}
        </Link>
      </nav>
    </header>
  );
}
