import Image from "next/image";

export function Icons({ stacks }: { stacks: string[] }) {
  return (
    <div className="flex items-center flex-wrap justify-evenly gap-1">
      {stacks.map((stack, index) => (
        <div key={index} className="size-8 sm:size-12 relative">
          <Image
            alt="ícone"
            src={`/assets/icons/${stack}.svg`}
            fill
            className="object-cover p-1 absolute"
          />
        </div>
      ))}
    </div>
  );
}
