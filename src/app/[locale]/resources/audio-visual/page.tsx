import Banner from "@/components/Banner/Banner";
import { generatePageMetadata } from "@/hooks/seo/metadata";
import Link from "next/link";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { AUDIO_VISUAL_PAGE_QUERY } from "../../../../../sanity/lib/queries/pageQueries/pageQueries";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "audiovisualPage",
  });
}

type PageProps = {
  params: { locale: string };
};

export default async function GalleryListPage({
  params: { locale },
}: PageProps) {
  const { data } = await sanityFetch({
    query: AUDIO_VISUAL_PAGE_QUERY,
    params: { lang: locale },
  });

  const t = await getTranslations("galleries");

  const sections = [
    {
      key: "images",
      href: "/resources/audio-visual/images",
    },
    {
      key: "videos",
      href: "/resources/audio-visual/videos",
    },
    {
      key: "audio",
      href: "/resources/audio-visual/audio",
    },
  ];

  return (
    <section className="max-w-7xl">
      <Banner backgroundImage="/banners/audiovisual.jpg" />
      <section className="px-4 py-16 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {data?.title || t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data?.description || t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {sections.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 p-8 text-center border"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {t(`sections.${item.key}.title`)}
              </h3>
              <p className="text-gray-500 mb-6">
                {t(`sections.${item.key}.desc`)}
              </p>
              <Link
                href={item.href}
                className="inline-block px-5 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
              >
                {t("sections.button")}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
