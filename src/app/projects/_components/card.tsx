"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { CiGlobe, CiImageOff } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";

import { Icons } from "./icons";

type CardProps = {
  i: number;
  title: string;
  description: string;
  imageUrl?: string;
  repositoryUrl: string;
  liveUrl?: string;
  stacks: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: [number, number];
  targetScale: number;
};

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  imageUrl,
  repositoryUrl,
  liveUrl,
  stacks,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky m-2 top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative pt-12 flex items-center gap-8 -top-[25%] h-[500px] w-[1000px] origin-top shadow-md border-2 border-b-4 border-[#A888B5] bg-[#f0f0f0]"
      >
        <div className="relative h-full md:w-5/6 px-4 md:pl-12 flex flex-col justify-between gap-4 font-extralight">
          <div>
            <h2 className="pb-4 text-4xl font-light tracking-tighter text-[#A888B5]">
              {title}
            </h2>
            <p className="text-justify text-xl tracking-wide text-slate-600">
              {description}
            </p>
          </div>

          <Icons stacks={stacks} />

          <div className="py-4 flex items-center justify-center gap-4 text-lg select-none">
            <Link
              href={repositoryUrl}
              target="_blank"
              className="w-40 p-1 flex gap-2 items-center justify-center text-slate-600 shadow-md hover:opacity-80 hover:shadow-none hover:scale-95"
            >
              <IoIosCode />
              Veja o Código
            </Link>
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="w-40 p-1 flex gap-2 items-center justify-center bg-[#d9bae6] shadow hover:opacity-80 hover:shadow-none hover:scale-95"
              >
                <CiGlobe />
                Confira Online
              </Link>
            )}
          </div>
        </div>

        <div className="hidden md:block w-full h-full justify-self-end mt-4 md:m-0 overflow-hidden select-none">
          <motion.div
            className="w-full h-full relative"
            style={{ scale: imageScale }}
          >
            {imageUrl ? (
              <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="w-full h-full absolute"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <CiImageOff className="size-24 opacity-40 text-[#d9bae6]" />
                <p>em progresso...</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
