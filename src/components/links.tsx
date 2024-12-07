"use client";

import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="w-full h-full pt-20 p-4 grid place-content-center gap-2">
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

const DURATION = 0.25;
const STAGGER = 0.025;

type Props = {
  children: string;
  href: string;
};

const FlipLink = ({ children, href }: Props) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase text-[14vw]"
      style={{
        lineHeight: 0.8,
      }}
    >
      {children && (
        <>
          <div>
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </>
      )}
    </motion.a>
  );
};
