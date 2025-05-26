import CorePrinciples from "./landing/Principles";
import HeroCarousel from "@/components/Hero/Hero";
import About from "./landing/About";
import DonationCTA from "@/components/CTA/DonationCTA";
import ProgramsObjectives from "./landing/Programs";
import AnnouncementsSection from "./landing/Announcements";
import { samplePosts } from "../../../lib/sampleposts";

import LatestPosts from "@/components/Posts/Latest/LatestPosts";
import FadeInSection from "@/components/Animations/FadeInSection";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* HERO SECTION */}
      <HeroCarousel />
      {/* DONATE LINK */}
      <DonationCTA />
      <div className="flex flex-col gap-4 md:gap-8 p-4">
        <About />
        {/* <FadeInSection>
        </FadeInSection> */}
        <FadeInSection delay={0.1}>
          <CorePrinciples />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <ProgramsObjectives />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <AnnouncementsSection />
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <LatestPosts posts={samplePosts} />
        </FadeInSection>
      </div>
    </div>
  );
}
