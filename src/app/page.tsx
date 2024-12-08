import { HomeTitle } from "@/components/title";

export default function Home() {
  return (
    <section className="w-full min-h-[80vh] py-32 sm:py-20 px-4 md:px-8 bg-[#f0f0f0]">
      <div className="flex justify-center flex-col lg:flex-row lg:items-center lg:gap-8">
        <HomeTitle text="Jéssica Bandeira" />
        <p className="max-w-96 lg:-mt-4 lg:w-64 text-[0.7em] tracking-wide leading-4">
          Olá! Sou uma desenvolvedora Web especializada em Frontend, dedicada em
          unir arte e funcionalidades para criar experiências digitais
          incríveis.
        </p>
      </div>

      <div className="text-right lg:-mt-10">
        <HomeTitle text="Dev Frontend" />
      </div>

      <div className="-mt-5 md:-mt-10">
        <HomeTitle text="& Freelance" />
      </div>
    </section>
  );
}
