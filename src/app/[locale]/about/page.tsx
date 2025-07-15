import Banner from "@/components/Banner/Banner";
import LeadershipSection from "./Leadership";
import FadeInSection from "@/components/Animations/FadeInSection";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "../../../../sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "../../../../sanity/lib/pageQueries";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "about",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("title")} | AhlulBayt Assembly of Kenya`,
    description: "Learn more about ABAK, our mission, vision, and leadership.",
    keywords: [
      "Islamic organization Kenya",
      "AhlulBayt Kenya",
      "Shia community Kenya",
      "ABAK",
      "Islamic charity Nairobi",
      "Muslim NGO Kenya",
    ],
    openGraph: {
      title: `${t("title")} | AhlulBayt Assembly of Kenya`,
      description:
        "Learn more about ABAK, our mission, vision, and leadership.",
      url: `${baseUrl}/${params.locale}/about`,
      type: "website",
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      images: [
        {
          url: `${baseUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${params.locale}/about`,
    },
  };
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
      <Banner backgroundImage="/banners/about.png" />
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
