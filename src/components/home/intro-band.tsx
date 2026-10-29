import type { Dictionary } from "@/i18n/dictionaries";

interface IntroBandProps {
  copy: Dictionary["home"];
}

export function IntroBand({ copy }: IntroBandProps) {
  return (
    <section className="intro-band">
      <div className="page-wrap intro-grid">
        <p className="eyebrow">{copy.introLabel}</p>
        <p className="intro-statement">
          {copy.introStart} <em>{copy.introAccent}</em>
        </p>
      </div>
    </section>
  );
}
