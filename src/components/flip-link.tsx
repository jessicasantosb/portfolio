import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

type Props = {
  children: string;
  href: string;
};

export const FlipLink = ({ children, href }: Props) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      className="relative block overflow-hidden whitespace-nowrap font-sans font-black uppercase text-[8vh] sm:text-[14vw] text-[#A888B5]"
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
