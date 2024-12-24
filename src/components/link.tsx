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
      className={`mr-4 pt-1 text-sm sm:text-md md:text-lg relative hover:text-[#A888B5] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#A888B5] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#A888B5] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] select-none 
            ${pathName === link && " underline underline-offset-4"}`}
    >
      {text}
    </Link>
  );
}
