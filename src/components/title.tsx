export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[8vh] md:text-[9vw] uppercase tracking-[-7px] md:tracking-[-13px] md:text-nowrap leading-none sm:leading-normal ">
      {text}
    </h1>
  );
}
