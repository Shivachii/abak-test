import { getTranslations } from "next-intl/server";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import { YOUTUBE_LINKS_QUERY } from "../../../../../../sanity/lib/queries";

export default async function VideosPage() {
  const t = await getTranslations("videos");

  const { data } = await sanityFetch({
    query: YOUTUBE_LINKS_QUERY,
  });

  const videos = data?.videos ?? [];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-secondary text-gray-800 mb-8">
        {t("title")}
      </h1>
      <p className="text-lg mb-8 text-justify mt-4 text-gray-600 max-w-2xl mx-auto">
        {t("description")}
      </p>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {video.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
