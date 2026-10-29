import Link from "next/link";
import { localizePath, type Dictionary, type Locale } from "@/i18n/dictionaries";

export function Footer({ locale, copy }: { locale: Locale; copy: Dictionary["footer"] }) {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-inner">
        <Link href={localizePath(locale, "/")} className="footer-brand">
          J<span>.</span>
        </Link>
        <p>{copy.madeWith}</p>
        <p>© {new Date().getFullYear()} · {copy.country}</p>
      </div>
    </footer>
  );
}
