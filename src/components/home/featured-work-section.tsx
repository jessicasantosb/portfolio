import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { localizePath, type Dictionary, type Locale } from "@/i18n/dictionaries";

const featuredProjects = projects.filter(({ id }) => [1, 2, 4].includes(id));

interface FeaturedWorkSectionProps {
  locale: Locale;
  copy: Dictionary["home"];
}

export function FeaturedWorkSection({ locale, copy }: FeaturedWorkSectionProps) {
  return (
    <section className="work-section">
      <div className="page-wrap section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.workEyebrow}</p>
            <h2>
              {copy.workTitle}
              <br />
              <span>{copy.workAccent}</span>
            </h2>
          </div>
          <Link className="text-link" href={localizePath(locale, "/projects")}>
            {copy.allProjects} <span>↗</span>
          </Link>
        </div>
        <div className="home-project-grid">
          {featuredProjects.map((project, index) => (
            <Link className="home-project" href={localizePath(locale, "/projects")} key={project.id}>
              <div className={`project-visual visual-${index + 1}`}>
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={`${copy.screenshotAlt}: ${project.title}`}
                    width={900}
                    height={600}
                  />
                ) : (
                  <div
                    className="project-placeholder"
                    aria-label={`${copy.missingImage} ${project.title}`}
                  >
                    <span>{project.title.slice(0, 1)}</span>
                  </div>
                )}
                <span className="project-open">↗</span>
              </div>
              <div className="project-caption">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.stacks.slice(0, 5).map((stack) => locale === "en" && stack === "IA Concierge" ? "AI Concierge" : stack).join(" · ")}</p>
                </div>
                <span>0{index + 1}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
