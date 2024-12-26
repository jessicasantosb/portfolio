"use client";

import Image from "next/image";
import { useState } from "react";

export function Icons({ stacks }: { stacks: string[] }) {
  const [showName, setShowName] = useState(false);
  const [currentStack, setCurrentStack] = useState("");

  const handleMouseOver = (stackName: string) => {
    setShowName(true);
    setCurrentStack(stackName);
  };

  return (
    <div className="relative flex items-center flex-wrap justify-evenly gap-1 select-none">
      {stacks.map((stack, index) => (
        <div key={index}>
          <div
            className="size-8 sm:size-12 relative"
            onMouseOver={() => handleMouseOver(stack)}
            onMouseLeave={() => setShowName(false)}
          >
            <Image
              alt="ícone"
              src={`/assets/icons/${stack}.svg`}
              fill
              className="object-cover absolute"
            />
          </div>
        </div>
      ))}

      {showName && (
        <div className="absolute -top-8 transition-shadow text-[#A888B5] text-lg">
          {currentStack}
        </div>
      )}
    </div>
  );
}
