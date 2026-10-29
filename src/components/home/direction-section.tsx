import type { Dictionary } from "@/i18n/dictionaries";

interface DirectionSectionProps {
  copy: Dictionary["home"];
}

export function DirectionSection({ copy }: DirectionSectionProps) {
  return (
    <section className="page-wrap section-block" id="about">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{copy.directionEyebrow}</p>
          <h2>
            {copy.directionTitle}
            <br />
            <span>{copy.directionAccent}</span>
          </h2>
        </div>
        <p className="section-aside">
          {copy.directionDescription}
        </p>
      </div>
      <div className="focus-grid">
        {copy.focus.map((item, index) => (
          <article className={`focus-card${index === 1 ? " focus-card-accent" : ""}`} key={item.title}>
            <span className="card-number">0{index + 1}</span>
            <span className="focus-icon">{["⌘", "✳", "◌"][index]}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="card-foot">{item.foot} <span>↗</span></span>
          </article>
        ))}
      </div>
    </section>
  );
}
