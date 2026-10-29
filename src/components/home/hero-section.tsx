import Link from "next/link";
import { localizePath, type Dictionary, type Locale } from "@/i18n/dictionaries";

interface HeroSectionProps {
  locale: Locale;
  copy: Dictionary["home"];
}

export function HeroSection({ locale, copy }: HeroSectionProps) {
  return (
    <section className="hero-shell page-wrap">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> {copy.heroLabel}
        </p>
        <h1>
          {copy.titleStart} <span>{copy.titleAccent}</span>
        </h1>
        <p className="hero-description">{copy.description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href={localizePath(locale, "/projects")}>
            {copy.projectsCta} <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button button-quiet" href={localizePath(locale, "/contact")}>
            {copy.contactCta} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-meta">
          <span>{copy.metaLeft}</span>
          <span>{copy.metaRight}</span>
        </div>
      </div>
      <div
        className="hero-art"
        role="img"
        aria-label={copy.artLabel}
      >
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-core">
          <span>J</span>
          <i>✳</i>
        </div>
        <span className="art-tag tag-top">{copy.artTags[0]}</span>
        <span className="art-tag tag-right">{copy.artTags[1]}</span>
        <span className="art-tag tag-bottom">{copy.artTags[2]}</span>
      </div>
    </section>
  );
}
