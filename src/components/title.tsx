export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[9vh] md:text-[9vw] uppercase font-black tracking-[-7px] md:text-nowrap leading-none sm:leading-normal ">
      {text}
    </h1>
  );
}
