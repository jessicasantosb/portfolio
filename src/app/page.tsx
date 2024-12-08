import { AnimatedBackground } from "@/components/animated-background";
import { HomeTitle } from "@/components/title";

export default function Home() {
  return (
    <section className="w-full min-h-[80vh] py-32 sm:py-20 px-4 md:px-8 bg-transparent">
      <div className="absolute top-0 right-0 h-screen w-full -z-20 opacity-25">
        <AnimatedBackground />
      </div>

      <div className="flex justify-center flex-col lg:flex-row lg:items-center lg:gap-8">
        <HomeTitle text="Jéssica Bandeira" />
        <p className="max-w-[25rem] lg:-mt-4 lg:w-64 text-[0.7em] tracking-wide leading-4">
          Olá! Sou uma <span className="italic">desenvolvedora Web</span>{" "}
          especializada em{" "}
          <span className="underline underline-offset-2">Frontend</span>,
          dedicada em unir <span className="text-[#a855f7]">arte</span> e
          funcionalidades para criar{" "}
          <span className="text-[#a855f7]">experiências digitais</span>{" "}
          incríveis.
        </p>
      </div>

      <div className="text-right lg:-mt-10 select-none">
        <HomeTitle text="Dev Frontend" />
      </div>

      <div className="-mt-5 md:-mt-10 select-none">
        <HomeTitle text="& Freelance" />
      </div>
    </section>
  );
}
