import { RevealLinks } from "@/components/links";

export const metadata = {
  title: "CONTATO",
  description:
    "Sou a Jessica! Aqui você encontra todos os links importantes e maneiras de entrar em contato comigo de forma rápida e fácil.",
};

export default function Contact() {
  return (
    <section className="w-full min-h-[80vh] py-20 px-4">
      <RevealLinks />
    </section>
  );
}
