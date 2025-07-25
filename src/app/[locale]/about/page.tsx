import Banner from "@/components/Banner/Banner";
import LeadershipSection from "./Leadership";
import FadeInSection from "@/components/Animations/FadeInSection";
import { sanityFetch } from "../../../../sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "../../../../sanity/lib/queries/pageQueries/pageQueries";
import { generatePageMetadata } from "@/hooks/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "aboutPage",
  });
}

type AboutPageProps = {
  params: { locale: string };
};

export default async function AboutPage({
  params: { locale },
}: AboutPageProps) {
  const { data } = await sanityFetch({
    query: ABOUT_PAGE_QUERY,
    params: { lang: locale },
  });

  return (
    <section>
      <Banner backgroundImage="/banners/about.jpg" />
      <div className="w-full px-4 py-12 bg-white text-foreground">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary my-2">
              {data?.name}
            </h1>
            <h2 className="text-secondary text-sm md:text-base font-bold uppercase tracking-wider">
              {data?.who}
            </h2>
            <p className="md:text-center text-justify text-gray-700 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              {data?.description}
            </p>
          </div>

          {/* Mission & Vision */}
          <FadeInSection delay={0.1}>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {data?.missionTitle}
                </h3>
                <p className="text-gray-700">{data?.mission}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {data?.visionTitle}
                </h3>
                <p className="text-gray-700">{data?.vision}</p>
              </div>
            </div>
          </FadeInSection>

          <LeadershipSection />
        </div>
      </div>
    </section>
  );
}
