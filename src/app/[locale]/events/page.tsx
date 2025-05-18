import { useTranslations } from "next-intl";
import { Calendar, MapPin } from "lucide-react";
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
    namespace: "events",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("upcomingEvents")} | AhlulBayt Assembly of Kenya`,
    description: t("stayUpdated"),
    keywords: [
      "events ABAK",
      "Islamic events Kenya",
      "community initiatives Kenya",
      "AhlulBayt events",
      "Kenya Islamic gatherings",
      "ABAK community",
    ],
    openGraph: {
      title: `${t("upcomingEvents")} | AhlulBayt Assembly of Kenya`,
      description: t("stayUpdated"),
      url: `${baseUrl}/${params.locale}/events`,
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: t("upcomingEvents"),
        },
      ],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${params.locale}/events`,
    },
  };
}

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function EventsPage() {
  const t = useTranslations("events");
  const events = t.raw("list") as Event[];

  return (
    <section className="w-full  max-w-7xl mx-auto">
      <Banner title={t("upcomingEvents")} />

      <div className="px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-3xl font-bold text-primary mt-2">
            {t("joinCommunityInitiatives")}
          </p>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            {t("stayUpdated")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-100 rounded-xl p-6 hover:shadow-lg transition"
            >
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
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
