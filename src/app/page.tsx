import { HomeTitle } from "@/components/title";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="p-4">
        <div className="flex items-center flex-col lg:flex-row gap-4">
          <HomeTitle text="freelance" />
          <div className="bg-green-200 h-[7vw] w-full" />
        </div>

        <div className="flex items-center flex-col-reverse lg:flex-row gap-4">
          <div className="bg-blue-200 h-[7vw] w-full" />
          <HomeTitle text="Dev Frontend" />
        </div>

        <div className="flex items-center flex-col lg:flex-row gap-4">
          <HomeTitle text="Jéssica Bandeira" />
          <p className="w-full lg:w-52 my-auto lg:text-xs tracking-wide leading-6">
            Olá! Sou uma desenvolvedora Web com foco em Frontend, sempre
            empenhada em expandir e refinar minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}
