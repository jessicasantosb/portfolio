"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  link: string;
  text: string;
}

export function LinkItem({ link, text }: LinkItemProps) {
  const pathName = usePathname();

  return (
    <Link
      href={link}
      className={`nav-link ${pathName === link ? "nav-link-active" : ""}`}
    >
      {text}
    </Link>
  );
}
