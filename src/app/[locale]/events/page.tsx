"use client";

import { useTranslations } from "next-intl";
import { Calendar, MapPin, ImageIcon } from "lucide-react";
import Banner from "@/components/Banner/Banner";
// import { Metadata } from "next";
// import { getTranslations } from "next-intl/server";
import { useState } from "react";
import Image from "next/image";

// export default function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const t = await getTranslations({
//     locale: params.locale,
//     namespace: "events",
//   });

//   const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

//   return {
//     title: `${t("upcomingEvents")} | AhlulBayt Assembly of Kenya`,
//     description: t("stayUpdated"),
//     keywords: [
//       "events ABAK",
//       "Islamic events Kenya",
//       "community initiatives Kenya",
//       "AhlulBayt events",
//       "Kenya Islamic gatherings",
//       "ABAK community",
//     ],
//     openGraph: {
//       title: `${t("upcomingEvents")} | AhlulBayt Assembly of Kenya`,
//       description: t("stayUpdated"),
//       url: `${baseUrl}/${params.locale}/events`,
//       siteName: "AhlulBayt Assembly of Kenya",
//       locale: params.locale,
//       type: "website",
//       images: [
//         {
//           url: `${baseUrl}/opengraph-image.png`,
//           width: 1200,
//           height: 630,
//           alt: t("upcomingEvents"),
//         },
//       ],
//     },
//     robots: "index, follow",
//     alternates: {
//       canonical: `${baseUrl}/${params.locale}/events`,
//     },
//   };
// }

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  images?: string[];
}

export default function EventsPage() {
  const t = useTranslations("events");
  const events = t.raw("list") as Event[];

  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto">
      <Banner backgroundImage="/banners/events.png" />

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
              <p className="text-gray-700 text-sm mb-4">{event.description}</p>

              {event.images && event.images.length > 0 && (
                <button
                  onClick={() => setSelectedImages(event.images!)}
                  className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:underline"
                >
                  <ImageIcon className="w-4 h-4" />
                  {t("viewImages") || "View Images"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Dialog */}
      {selectedImages && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedImages(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold p-2 mb-2"
              aria-label="Close image viewer"
            >
              &times;
            </button>

            <div className="mt-8">
              {selectedImages.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full h-48 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`Event image ${i + 1}`}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 italic">
                  {t("noMedia") || "Sorry, no media to view right now"}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
