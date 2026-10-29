import { contactLinks } from "@/data/contact-links";
import { dictionaries, resolveLocale } from "@/i18n/dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = dictionaries[locale].contact;
  return { title: copy.pageTitle, description: copy.pageDescription };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const copy = dictionaries[locale].contact;

  return (
    <main className="page-wrap contact-page">
      <section className="contact-copy">
        <p className="eyebrow">{locale === "pt" ? "CONTATO" : "CONTACT"}</p>
        <h1>
          {copy.title}
          <br />
          <span>{copy.titleAccent}</span>
        </h1>
        <p>{copy.intro}</p>
        <div className="contact-links">
          {contactLinks.map(({ href, name }) => (
            href ? (
              <a
                href={href}
                key={name}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                <span>{name}</span>
                <span>↗</span>
              </a>
            ) : (
              <div className="contact-link-unconfigured" key={name}>
                <span>{name}</span>
                <span>{copy.configure}</span>
              </div>
            )
          ))}
        </div>
      </section>
      <div className="contact-art" aria-hidden="true">
        <div className="contact-art-ring ring-a" />
        <div className="contact-art-ring ring-b" />
        <span>✳</span>
        <small>
          {copy.artTop}
          <br />
          {copy.artBottom}
        </small>
      </div>
    </main>
  );
}
