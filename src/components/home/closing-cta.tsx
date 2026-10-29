import Link from "next/link";
import { localizePath, type Dictionary, type Locale } from "@/i18n/dictionaries";

interface ClosingCtaProps {
  locale: Locale;
  copy: Dictionary["home"];
}

export function ClosingCta({ locale, copy }: ClosingCtaProps) {
  return (
    <section className="page-wrap closing-cta">
      <p className="eyebrow">{copy.closingEyebrow}</p>
      <h2>
        {copy.closingTitle}
        <br />
        <span>{copy.closingAccent}</span>
      </h2>
      <Link className="button button-primary" href={localizePath(locale, "/contact")}>
        {copy.closingCta} <span>↗</span>
      </Link>
      <span className="cta-spark" aria-hidden="true">✳</span>
    </section>
  );
}
