import Link from "next/link";
import { LinkItem } from "./link";

export function Header() {
  return (
    <header className="p-4 sm:p-6 flex items-center justify-between gap-2 uppercase tracking-tighter ">
      <Link href={"/"} className="text-md sm:text-xl md:text-2xl">
        Jessica Bandeira
      </Link>
      <div>
        <LinkItem link="/projects" text="Projetos" />
        <LinkItem link="/contact" text="Contatos" />
      </div>
    </header>
  );
}
