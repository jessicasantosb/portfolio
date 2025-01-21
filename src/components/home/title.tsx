"use client";

import { Variants } from "motion/react";
import { ComponentProps } from "react";
import { MotionH1 } from "../shared/motion";

type HomeTitleProps = ComponentProps<typeof MotionH1> & { dir: string };

export function HomeTitle({ dir, ...props }: HomeTitleProps) {
  const titleVariants: Variants = {
    hidden: (custom) => ({
      x: custom,
      opacity: 0,
      speed: 5,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.8,
      },
    },
  };

  return (
    <MotionH1
      initial="hidden"
      animate="visible"
      custom={dir}
      variants={titleVariants}
      {...props}
      className="text-[8vh] md:text-[7vw] uppercase tracking-[-7px] md:text-nowrap leading-none sm:leading-normal "
    />
  );
}
