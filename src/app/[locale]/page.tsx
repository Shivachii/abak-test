import CorePrinciples from "./landing/Principles";
import HeroCarousel from "@/components/Hero/Hero";
import About from "./landing/About";

import ProgramsObjectives from "./landing/Objectives";
import FadeInSection from "@/components/Animations/FadeInSection";
import Programs from "./landing/Programs";
import Events from "./landing/Events";

import { FinancialSection } from "./landing/Financial";
import { sanityFetch } from "../../../sanity/lib/live";
import { homePageQuery } from "../../../sanity/lib/pageQueries";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data } = await sanityFetch({
    query: homePageQuery,
    params: { lang: locale },
  });

  return (
    <div className="flex flex-col ">
      {/* HERO SECTION */}
      <HeroCarousel data={data.hero} />
      {/* DONATE LINK */}
      {/* <DonationCTA /> */}
      <div className="flex flex-col gap-4 md:gap-8 p-4">
        <FadeInSection>
          <About data={data.aboutUs} />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <CorePrinciples data={data.coreValues} />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <ProgramsObjectives data={data.objectives} />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <Programs data={data.projects} />
        </FadeInSection>
        <FadeInSection delay={0.5}>
          <FinancialSection data={data.financialSupport} />
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <Events data={data.communityInitiatives} />
        </FadeInSection>
      </div>
    </div>
  );
}
