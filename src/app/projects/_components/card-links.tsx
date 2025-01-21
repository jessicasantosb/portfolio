import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";
import { CardProps } from "./card";

type CardLinksProps = Pick<CardProps, "repositoryUrl" | "liveUrl">;

export function CardLinks({ repositoryUrl, liveUrl }: CardLinksProps) {
  return (
    <div className="py-4 flex items-center justify-center gap-4 text-lg select-none">
      <Link
        href={repositoryUrl}
        target="_blank"
        className="w-44 h-10 p-2 flex gap-2 justify-center text-slate-600 shadow-md hover:opacity-80 hover:shadow-none hover:scale-95"
      >
        <IoIosCode size={24} />
        Veja o Código
      </Link>

      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          className="w-44 h-10 p-2 border flex gap-2 justify-center bg-[#d9bae6] shadow hover:opacity-80 hover:shadow-none hover:scale-95"
        >
          <CiGlobe size={24} />
          Confira Online
        </Link>
      )}
    </div>
  );
}
