import { useTranslations } from "next-intl";
import Banner from "@/components/Banner/Banner";
import { ObjectivesTabs } from "@/components/Tabs/Tabs";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ObjectivesDisplay from "@/components/Tabs/Display";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "programs",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("objectivesTitle")} | AhlulBayt Assembly of Kenya`,
    description: t("objectivesDescription"),
    keywords: [
      "Islamic programs Kenya",
      "community objectives ABAK",
      "AhlulBayt programs",
      "education Kenya",
      "Islamic community development",
    ],
    openGraph: {
      title: `${t("objectivesTitle")} | AhlulBayt Assembly of Kenya`,
      description: "Get to know about our governing objectives",
      url: `${baseUrl}/${params.locale}/programs/objectives`,
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/opengraph-image.png`, // Your OG image path
          width: 1200,
          height: 630,
          alt: t("objectivesTitle"),
        },
      ],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${params.locale}/programs/objectives`,
    },
  };
}

export default function ProgramsObjectives() {
  const t = useTranslations();

  return (
    <div className="w-full">
      <Banner backgroundImage="/banners/objectives.jpg" />
      <div className="px-4 py-12 flex flex-col gap-2 mx-auto max-w-7xl ">
        <h3 className="text-3xl font-bold text-secondary tracking-wide ">
          {t("programs.mainObjectivesHeader")}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t("programs.objectivesDescription")}
        </p>
        <div className="my-4 hidden  md:block ">
          <ObjectivesTabs />
        </div>
        <div className="my-4 md:hidden">
          <ObjectivesDisplay />
        </div>
      </div>
    </div>
  );
}
