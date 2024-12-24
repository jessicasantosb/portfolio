"use client";

import Lenis from "@studio-freight/lenis";
import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";

import { projects } from "@/data/projects";

import { Card } from "./card";

export function Cards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div ref={container} className="relative">
      {projects.map(
        ({ title, imageUrl, repositoryUrl, liveUrl, stacks, color }, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              title={title}
              imageUrl={imageUrl}
              repositoryUrl={repositoryUrl}
              liveUrl={liveUrl}
              stacks={stacks}
              color={color}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        }
      )}
    </div>
  );
}
