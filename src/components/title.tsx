export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[8vh] md:text-[7vw] uppercase tracking-[-7px] md:text-nowrap leading-none sm:leading-normal ">
      {text}
    </h1>
  );
}
