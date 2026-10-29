import { dictionaries, resolveLocale } from "@/i18n/dictionaries";
import { HeroSection } from "@/components/home/hero-section";
import { IntroBand } from "@/components/home/intro-band";
import { DirectionSection } from "@/components/home/direction-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { ClosingCta } from "@/components/home/closing-cta";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const copy = dictionaries[locale].home;

  return (
    <main>
      <HeroSection locale={locale} copy={copy} />
      <IntroBand copy={copy} />
      <DirectionSection copy={copy} />
      <FeaturedWorkSection locale={locale} copy={copy} />
      <ClosingCta locale={locale} copy={copy} />
    </main>
  );
}
