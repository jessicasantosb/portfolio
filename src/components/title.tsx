export function HomeTitle({ text }: { text: string }) {
  return (
    <h1 className="text-[10vw] self-start tracking-widest lg:tracking-tighter leading-none text-nowrap">
      {text}
    </h1>
  );
}
