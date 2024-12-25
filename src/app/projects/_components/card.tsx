"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";

import { Icons } from "./icons";

type CardProps = {
  i: number;
  title: string;
  imageUrl: string;
  repositoryUrl: string;
  liveUrl?: string;
  stacks: string[];
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: [number, number];
  targetScale: number;
};

export const Card: React.FC<CardProps> = ({
  i,
  title,
  imageUrl,
  repositoryUrl,
  liveUrl,
  stacks,
  color,
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
          background: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col md:flex-row items-center gap-8 -top-[25%] h-[500px] w-[800px] p-8 md:p-12 origin-top shadow-md"
      >
        <div className="relative h-full w-full md:w-3/5 md:py-8 flex flex-col justify-between gap-4 font-extralight">
          <h2 className="text-center text-3xl sm:text-5xl font-light tracking-tighter text-[#A888B5]">
            {title}
          </h2>

          <Icons stacks={stacks} />

          <div className="flex flex-col items-center gap-4 mt-4 text-lg md:text-xl tracking-wider">
            <Link
              href={repositoryUrl}
              target="_blank"
              className="w-44 p-1 flex gap-2 items-center justify-center bg-[#f0f0f0] shadow hover:opacity-80 hover:shadow-none hover:scale-95"
            >
              <IoIosCode />
              Veja o Código
            </Link>
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="w-44 p-1 flex gap-2 items-center justify-center bg-[#d9bae6] shadow hover:opacity-80 hover:shadow-none hover:scale-95"
              >
                <CiGlobe />
                Confira Online
              </Link>
            )}
          </div>
        </div>

        <div className="w-full h-full mt-4 overflow-hidden rotate-6">
          <motion.div
            className="w-full h-full relative"
            style={{ scale: imageScale }}
          >
            <Image
              alt="image"
              src={imageUrl}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain absolute"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
