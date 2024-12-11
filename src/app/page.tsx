import { AnimatedBackground } from "@/components/animated-background";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <section className="max-w-6xl h-full mx-auto py-16 px-4 md:px-8 bg-transparent overflow-hidden">
      <div className="absolute top-0 right-0 h-screen w-full -z-20 opacity-25">
        <AnimatedBackground />
      </div>

      <Hero />
    </section>
  );
}
