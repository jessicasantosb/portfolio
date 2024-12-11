import { Variants, motion } from "motion/react";

export function HomeTitle({ text, dir }: { text: string; dir: string }) {
  const titleVariants: Variants = {
    hidden: {
      x: dir,
      opacity: 0,
      speed: 5,
    },
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
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={titleVariants}
      className="text-[8vh] md:text-[7vw] uppercase tracking-[-7px] md:text-nowrap leading-none sm:leading-normal "
    >
      {text}
    </motion.h1>
  );
}
