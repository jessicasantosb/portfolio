"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[500px] w-[800px] p-8 md:p-12 origin-top"
      >
        <div className="flex flex-col md:flex-row items-center h-full mt-12 gap-8 md:gap-12">
          <div className="relative w-full md:w-2/5 flex flex-col justify-center gap-8 font-extralight">
            <h2 className="text-center text-2xl md:text-4xl font-light">
              {title}
            </h2>

            <Icons stacks={stacks} />

            <div className="flex items-center justify-between gap-4 mt-4 text-lg md:text-xl">
              <Link
                href={repositoryUrl}
                target="_blank"
                className="hover:underline underline-offset-2"
              >
                Repositório
              </Link>
              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  className="hover:underline underline-offset-2"
                >
                  Live
                </Link>
              )}
            </div>
          </div>

          <div className="w-full h-full overflow-hidden rotate-6">
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
                className="object-cover absolute"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
