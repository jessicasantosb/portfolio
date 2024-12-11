"use client";

import { motion, Variants } from "motion/react";

import { HomeTitle } from "./title";

const pVariants: Variants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
};

export function Hero() {
  return (
    <>
      <div className="flex justify-center flex-col lg:flex-row lg:items-center lg:gap-8">
        <HomeTitle dir="-100%" text="Jéssica Bandeira" />
        <div className="overflow-hidden py-1 md:py-4">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={pVariants}
            className="max-w-[25rem] pt-2 pb-4 sm:p-0 lg:-mt-4 lg:w-64 text-[0.7em] font-light tracking-wide leading-4"
          >
            Olá! Sou uma <span className="italic">desenvolvedora Web</span>{" "}
            especializada em{" "}
            <span className="underline underline-offset-2">Frontend</span>,
            dedicada em unir <span className="text-[#a855f7]">arte</span> e
            funcionalidades para criar{" "}
            <span className="text-[#a855f7]">experiências digitais</span>{" "}
            incríveis.
          </motion.p>
        </div>
      </div>

      <div className="text-right lg:-mt-10 select-none">
        <HomeTitle dir="100%" text="Dev Frontend" />
      </div>

      <div className="text-right sm:text-left sm:-mt-5 md:-mt-10 select-none">
        <HomeTitle dir="-100%" text="& Freelancer" />
      </div>
    </>
  );
}
