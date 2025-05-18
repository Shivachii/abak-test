import { BookOpen } from "lucide-react";
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
    namespace: "QuranReflections",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("heroTitle")} | AhlulBayt Assembly of Kenya`,
    description: t("heroSubtitle"),
    keywords: [
      "Quran reflections",
      "Islamic teachings",
      "Spirituality in the Quran",
      "Patience in Islam",
      "Trust in God",
      "Forgiveness in the Quran",
      "AhlulBayt Assembly",
      "Islamic guidance Kenya",
    ],
    openGraph: {
      title: `${t("heroTitle")} | AhlulBayt Assembly of Kenya`,
      description: t("heroSubtitle"),
      url: `${baseUrl}/${params.locale}/programs/quran-reflections`,
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: t("heroTitle"),
        },
      ],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${params.locale}/programs/quran-reflections`,
    },
  };
}

export default function QuranReflectionsPage() {
  const t = useTranslations("QuranReflections");

  const reflectionKeys = ["patience", "trust", "forgiveness"];

  return (
    <section className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-center px-4">
        <div className="z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Reflections */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 mx-auto py-16 px-4 gap-10">
        {reflectionKeys.map((key) => (
          <div
            key={key}
            className="border-l-4 border-primary bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-2 text-primary">
              <BookOpen size={20} />
              <h2 className="text-xl font-bold">
                {t(`reflections.${key}.title`)}
              </h2>
            </div>
            <p className="text-gray-700 italic mb-2">
              {t(`reflections.${key}.verse`)}
            </p>
            <p className="text-gray-800">{t(`reflections.${key}.text`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
