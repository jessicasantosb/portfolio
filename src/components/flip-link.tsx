import { motion } from "framer-motion";

const DURATION = 0.35;
const STAGGER = 0.035;

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
      className="relative block h-full overflow-hidden whitespace-nowrap uppercase text-[9vh] sm:text-[14vw] text-[#A888B5] tracking-[-5px] sm:tracking-normal"
      style={{
        lineHeight: 1.1,
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
