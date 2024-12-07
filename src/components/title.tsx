export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[13vw] lg:text-[10vw] self-start tracking-tighter leading-none text-nowrap">
      {text}
    </h1>
  );
}
