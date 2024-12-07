export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[13vw] lg:text-[10vw] self-start font-black tracking-[-3.5px] md:tracking-[-7px] lg:tracking-[-10px] leading-none text-nowrap">
      {text}
    </h1>
  );
}
