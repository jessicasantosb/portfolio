import { HomeTitle } from "@/components/title";

export default function Home() {
  return (
    <section className="w-full min-h-[80vh] pt-20 md:pt-8 lg:pt-20 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
        <HomeTitle text="freelance" />
        <div className="bg-green-200 h-[8vw] w-full" />
      </div>

      <div className="pt-4 lg:p-0 flex flex-col-reverse lg:flex-row gap-0 lg:gap-4">
        <div className="bg-green-200 h-[8vw] w-full" />
        <HomeTitle text="Dev Frontend" />
      </div>

      <div className="pt-4 lg:p-0 flex items-center flex-col lg:flex-row gap-4">
        <HomeTitle text="Jéssica Bandeira" />
        <p className="w-full lg:w-52 my-auto lg:text-xs tracking-wide leading-6">
          Olá! Sou uma desenvolvedora Web especializada em Frontend, dedicada em
          unir arte e funcionalidades para criar experiências digitais
          incríveis.
        </p>
      </div>
    </section>
  );
}
