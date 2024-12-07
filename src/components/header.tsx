import Link from "next/link";

export function Header() {
  return (
    <header className="p-6 flex items-center justify-between gap-2">
      <Link
        href={"/"}
        className="uppercase tracking-tighter text-xl md:text-2xl"
      >
        Jessica Bandeira
      </Link>
      <Link
        href={"/"}
        className="uppercase tracking-tighter text-lg md:text-xl underline-offset-4 hover:underline"
      >
        Contato
      </Link>
    </header>
  );
}
