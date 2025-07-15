import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner/Banner";

import { getTranslations } from "next-intl/server";
import { sanityFetch } from "../../../../sanity/lib/live";
import { PROJECTS_PAGE_QUERY } from "../../../../sanity/lib/pageQueries";

export async function generateMetadata({ params }) {
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

export default async function ProjectsPage({ params }) {
  const { data } = await sanityFetch({
    query: PROJECTS_PAGE_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="w-full max-w-7xl mx-auto">
      <Banner backgroundImage="/banners/projects.png" />
      <div className="px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 my-8">
          {data?.projects?.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-secondary">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
                <Link href={project.href}>
                  <Button variant="outline" className="mt-2">
                    {data.buttonText}
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
