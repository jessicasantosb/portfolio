"use client";

import { FlipLink } from "./flip-link";

export const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2">
      <FlipLink
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
      >
        Whatsapp
      </FlipLink>
      <FlipLink
        href={`https://discordapp.com/users/${process.env.NEXT_PUBLIC_DISCORD_USER}`}
      >
        Discord
      </FlipLink>
      <FlipLink
        href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`}
      >
        Github
      </FlipLink>
      <FlipLink
        href={`https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`}
      >
        Linkedin
      </FlipLink>
      <FlipLink
        href={`https://www.youtube.com/@${process.env.NEXT_PUBLIC_YOUTUBE_USER}`}
      >
        Youtube
      </FlipLink>
      <FlipLink href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
        Email
      </FlipLink>
      <FlipLink href={`https://x.com/${process.env.NEXT_PUBLIC_X_USER}`}>
        X
      </FlipLink>
    </section>
  );
};
