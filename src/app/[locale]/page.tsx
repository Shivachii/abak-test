import CorePrinciples from "./landing/Principles";
import HeroCarousel from "@/components/Hero/Hero";
import About from "./landing/About";
// import DonationCTA from "@/components/CTA/DonationCTA";
import ProgramsObjectives from "./landing/Objectives";
import FadeInSection from "@/components/Animations/FadeInSection";
import Programs from "./landing/Programs";
import Events from "./landing/Events";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* HERO SECTION */}
      <HeroCarousel />
      {/* DONATE LINK */}
      {/* <DonationCTA /> */}
      <div className="flex flex-col gap-4 md:gap-8 p-4">
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <CorePrinciples />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <ProgramsObjectives />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <Programs />
        </FadeInSection>
        <FadeInSection delay={0.4}>
          {/* <LatestPosts posts={samplePosts} /> */}
          <Events />
        </FadeInSection>
      </div>
    </div>
  );
}
