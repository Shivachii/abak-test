"use client";

import { useTranslations } from "next-intl";
import { Calendar, MapPin } from "lucide-react";

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
    <section className="w-full px-4 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-sm font-bold text-secondary tracking-widest uppercase">
          {t("upcomingEvents")}
        </h2>
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
    </section>
  );
}
