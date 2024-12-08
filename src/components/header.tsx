import Link from "next/link";

export function Header() {
  return (
    <header className="p-4 sm:p-6 flex items-center justify-between gap-2 uppercase tracking-tighter ">
      <Link href={"/"} className="text-md sm:text-xl md:text-2xl">
        Jessica Bandeira
      </Link>
      <Link
        href={"/contact"}
        className="pt-1 text-sm sm:text-md md:text-lg underline-offset-4 hover:underline"
      >
        Contato
      </Link>
    </header>
  );
}
