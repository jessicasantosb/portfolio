import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { dictionaries, localizePath, resolveLocale } from "@/i18n/dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = dictionaries[locale].projects;
  return { title: copy.pageTitle, description: copy.pageDescription };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const copy = dictionaries[locale].projects;

  return (
    <main className="page-wrap projects-page">
      <section className="page-intro">
        <p className="eyebrow">{locale === "pt" ? "PORTFÓLIO" : "PORTFOLIO"} / {new Date().getFullYear()}</p>
        <h1>
          {copy.title}
          <br />
          <span>{copy.titleAccent}</span>
        </h1>
        <p>{copy.intro}</p>
      </section>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.id}>
            <div className="project-row-image">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={`${copy.screenshotAlt}: ${project.title}`}
                  width={1200}
                  height={800}
                />
              ) : (
                <div
                  className="project-placeholder"
                  aria-label={`${copy.missingImage} ${project.title}`}
                >
                  <span>{project.title.slice(0, 1)}</span>
                </div>
              )}
              <span>0{index + 1}</span>
            </div>
            <div className="project-row-info">
              <p className="eyebrow">{project.stacks.map((stack) => locale === "en" && stack === "IA Concierge" ? "AI Concierge" : stack).join(" · ")}</p>
              <h2>{project.title}</h2>
              <p>{locale === "en" ? project.descriptionEn ?? project.description : project.description}</p>
              <div className="project-links">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  {copy.frontendRepo} <span>↗</span>
                </a>
                {project.backendRepositoryUrl && (
                  <a href={project.backendRepositoryUrl} target="_blank" rel="noreferrer">
                    {copy.backendRepo} <span>↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {copy.liveProject} <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="projects-cta">
        <p>{copy.ctaQuestion}</p>
        <Link className="text-link" href={localizePath(locale, "/contact")}>
          {copy.cta} <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
