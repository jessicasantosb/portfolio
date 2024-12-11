import { ComponentProps } from "react";
import { MotionA, MotionSpan } from "./shared/motion";

const DURATION = 0.35;
const STAGGER = 0.035;

type FlipLinkProps = ComponentProps<typeof MotionA> & { children: string };

export const FlipLink = ({ children, ...props }: FlipLinkProps) => {
  return (
    <MotionA
      initial="initial"
      whileHover="hovered"
      target="_blank"
      {...props}
      className="relative block h-full overflow-hidden whitespace-nowrap uppercase text-[9vh] sm:text-[14vw] text-[#A888B5] tracking-[-5px] sm:tracking-normal"
      style={{
        lineHeight: 1.1,
      }}
    >
      {children && (
        <>
          <div>
            {children.split("").map((l, i) => (
              <MotionSpan
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
              </MotionSpan>
            ))}
          </div>
          <div className="absolute inset-0">
            {children.split("").map((l, i) => (
              <MotionSpan
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
              </MotionSpan>
            ))}
          </div>
        </>
      )}
    </MotionA>
  );
};
