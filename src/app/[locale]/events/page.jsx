import { Calendar, MapPin } from "lucide-react";
import Banner from "@/components/Banner/Banner";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "../../../../sanity/lib/live";
import { EVENTS_QUERY } from "../../../../sanity/lib/queries";
import { EVENTS_PAGE_QUERY } from "../../../../sanity/lib/queries/pageQueries/pageQueries";
import { getTranslations } from "next-intl/server";
import { urlFor } from "../../../../sanity/lib/image";
import { generatePageMetadata } from "@/hooks/seo/metadata";

export async function generateMetadata({ params }) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "eventsPage",
  });
}

export default async function EventsPage({ params }) {
  const t = await getTranslations("events");

  const { data } = await sanityFetch({
    query: EVENTS_QUERY,
    params: { lang: params.locale },
  });
  const pageData = await sanityFetch({
    query: EVENTS_PAGE_QUERY,
    params: { lang: params.locale },
  });

  const events = data ?? [];

  return (
    <section className="w-full max-w-7xl mx-auto">
      <Banner backgroundImage="/banners/events.jpg" />

      <div className="px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-3xl font-bold text-primary mt-2">
            {pageData?.title || t("joinCommunityInitiatives")}
          </p>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            {pageData?.subtitle || t("stayUpdated")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <Link
              href={`/events/${event.slug}`}
              key={i}
              className="bg-white shadow-md border border-gray-100 rounded-xl hover:shadow-lg transition block overflow-hidden"
            >
              {/* Event Banner Image */}
              {event.images && (
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(event.images).url()}
                    alt={`Event image`}
                    fill
                    className="object-cover"
                    priority
                    quality={60}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {event.title}
                </h3>
                <div className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
