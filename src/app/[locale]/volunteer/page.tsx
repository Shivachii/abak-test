// app/[locale]/get-involved/volunteer/page.tsx
import VolunteerDialog from "@/components/Forms/Volunteer";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "../../../../sanity/lib/live";
import { VOLUNTEER_PAGE_QUERY } from "../../../../sanity/lib/pageQueries";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "volunteer",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("title")} | AhlulBayt Assembly of Kenya`,
    description: "Join us in making a difference through volunteering.",
    keywords: [
      "Volunteer ABAK",
      "AhlulBayt Kenya volunteering",
      "Islamic service opportunities",
      "Community involvement",
      "Islamic NGO Kenya",
      "ABAK volunteers",
      "Youth Islamic service",
    ],
    openGraph: {
      title: `${t("title")} | AhlulBayt Assembly of Kenya`,
      description: "Join us in making a difference through volunteering.",
      url: `${baseUrl}/${params.locale}/get-involved/volunteer`,
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${params.locale}/get-involved/volunteer`,
    },
  };
}

export default async function VolunteerPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data } = await sanityFetch({
    query: VOLUNTEER_PAGE_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {data?.title}
        </h1>
        <p className="text-gray-700 text-lg">{data?.subtitle}</p>
      </div>

      <div className="bg-secondary/10 border border-secondary p-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-secondary">
          {data?.opportunityTitle}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {data?.opportunities?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <section className="text-center">
        <VolunteerDialog />
      </section>
    </section>
  );
}
