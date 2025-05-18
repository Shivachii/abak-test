import VolunteerDialog from "@/components/Forms/Volunteer";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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

export default function VolunteerPage() {
  const t = useTranslations("volunteer");
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {t("title")}
        </h1>
        <p className="text-gray-700 text-lg">{t("subtitle")}</p>
      </div>

      <div className="bg-secondary/10 border border-secondary p-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-secondary">
          {t("opportunitytitle")}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li> {t("opportunities.one")}</li>
          <li> {t("opportunities.two")}</li>
          <li> {t("opportunities.three")}</li>
          <li> {t("opportunities.four")}</li>
        </ul>
      </div>

      <section className="text-center">
        <VolunteerDialog />
      </section>
    </section>
  );
}
