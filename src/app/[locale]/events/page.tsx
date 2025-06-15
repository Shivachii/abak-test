"use client";

import { useTranslations } from "next-intl";
import { Calendar, MapPin } from "lucide-react";
import Banner from "@/components/Banner/Banner";
import Image from "next/image";
import { useState } from "react";

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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              {event.images && event.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2 my-4">
                  {event.images.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Event image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-200 hover:scale-105"
                        loading="lazy"
                        quality={60}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              )}
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold p-2"
              aria-label="Close image viewer"
            >
              &times;
            </button>
            <div className="w-full h-[70vh] relative my-16">
              <Image
                src={selectedImage}
                alt="Selected event"
                fill
                className="object-contain"
                loading="eager"
                quality={75}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
