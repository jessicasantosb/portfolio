import { pVariants } from "../shared/animation-variants";
import { MotionP } from "../shared/motion";
import { HomeTitle } from "./title";

export function Hero() {
  return (
    <>
      <div className="flex justify-center flex-col lg:flex-row lg:items-center lg:gap-8">
        <HomeTitle dir="-100%">Jéssica Bandeira</HomeTitle>
        <div className="overflow-hidden md:-mt-3">
          <MotionP
            initial="hidden"
            animate="visible"
            variants={pVariants}
            className="max-w-[25rem] lg:w-[20rem] text-[0.90rem] sm:text-[1rem] font-light tracking-wide leading-5 sm:leading-[1.18rem]"
          >
            Olá! Sou uma <span className="italic">desenvolvedora Web</span>{" "}
            especializada em{" "}
            <span className="underline underline-offset-2">Frontend</span>,
            dedicada em unir <span className="text-[#a855f7]">arte</span> e
            funcionalidades para criar{" "}
            <span className="text-[#a855f7]">experiências digitais</span>{" "}
            incríveis.
          </MotionP>
        </div>
      </div>

      <div className="text-right lg:-mt-10 select-none">
        <HomeTitle dir="100%">Dev Frontend</HomeTitle>
      </div>

      <div className="text-right sm:text-left sm:-mt-5 md:-mt-10 select-none">
        <HomeTitle dir="-100%">& Freelancer</HomeTitle>
      </div>
    </>
  );
}
