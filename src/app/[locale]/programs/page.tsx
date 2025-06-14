import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Banner from "@/components/Banner/Banner";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Projects",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("title")} | AhlulBayt Assembly of Kenya`,
    description: t("description"),
    keywords: [
      "ABAK Projects",
      "Islamic education",
      "Hawza Kenya",
      "Free clinics",
      "Media da'wah",
      "Community programs",
      "AhlulBayt Assembly",
      "Social impact Islam",
    ],
    openGraph: {
      title: `${t("title")} | AhlulBayt Assembly of Kenya`,
      description: t("description"),
      url: `${baseUrl}/${params.locale}/programs/projects`,
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      type: "website",
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
      canonical: `${baseUrl}/${params.locale}/programs/projects`,
    },
  };
}

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const items = [
    "hawza",
    "mubaligheenTraining",
    "mubaligheenSupport",
    "media",
    "communitySupport",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto ">
      <Banner backgroundImage="/banners/projects.png" />
      <div className="px-4 py-16">
        {/* <p className="md:text-center text-justify text-gray-500 max-w-3xl mx-auto my-4 text-lg leading-relaxed">
          {t("description")}
        </p> */}
        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 my-8">
          {items.map((key) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={t(`items.${key}.image`)}
                alt={t(`items.${key}.title`)}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-secondary">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t(`items.${key}.description`)}
                </p>
                <Link href={t(`items.${key}.href`)}>
                  <Button variant="outline" className="mt-2">
                    {t("button")}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
