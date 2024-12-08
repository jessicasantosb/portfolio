export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[11vw] lg:text-[9vw] uppercase font-black tracking-[-5px] sm:tracking-[-9px] md:tracking-[-10px] text-nowrap">
      {text}
    </h1>
  );
}
