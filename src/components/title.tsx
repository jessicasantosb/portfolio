export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[9vh] md:text-[9vw] uppercase font-black tracking-[-6px] md:text-nowrap leading-tight sm:leading-normal ">
      {text}
    </h1>
  );
}
