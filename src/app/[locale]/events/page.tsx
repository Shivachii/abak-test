"use client";

import { useTranslations } from "next-intl";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Muballigheen Symposium",
    date: "May 4, 2025",
    location: "Western",
    description:
      "A regional symposium for Western-based Muballigheen focused on strengthening regional outreach and Islamic education programs.",
  },
  {
    title: "Nikah for One of the Mubalighat",
    date: "April 27, 2025",
    location: "Kichaka Mkwaju, Coast",
    description:
      "A blessed Nikah celebration attended by Shk. Ali Samojah, Shk. Juma Shughuli, and Shk. Salim Mwaega, honoring a Muballighat's new journey.",
  },
  {
    title: "Arbaeen for Late Shk. Maradi & Meeting with Muballighiin",
    date: "April 6, 2025",
    location: "Kibuyuni, Kwale",
    description:
      "Commemorating the life of Late Shk. Maradi and uniting Muballighiin in a meaningful gathering for reflection and planning.",
  },
  {
    title: "Ramadhan Classes",
    date: "March 1 – April 1, 2025",
    location: "Parkroad",
    description:
      "A month-long series of educational sessions during Ramadhan 1446, focusing on spiritual growth and community engagement.",
  },
  {
    title:
      "Majlis Fa'tiha for Shahid Sayyid Hassan Nasrullah & Shahid Sayyid Hashim Swafiyudin",
    date: "February 23, 2025",
    location: "Parkroad",
    description:
      "A solemn Majlis to honor the lives and legacies of two esteemed martyrs, fostering remembrance and unity.",
  },
  {
    title: "Muballigheen Symposium",
    date: "February 8, 2025",
    location: "Parklands Plaza",
    description:
      "A symposium bringing together Muballigheen to exchange ideas, receive training, and enhance their spiritual leadership skills.",
  },

  {
    title: "Muballighiin Meeting",
    date: "September 11, 2024",
    location: "Ngumo",
    description:
      "A focused gathering of Muballigheiin to discuss current initiatives, share feedback, and strategize for future community outreach.",
  },
];

export default function EventsPage() {
  const t = useTranslations();

  return (
    <section className="w-full px-4 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-sm font-bold text-secondary tracking-widest uppercase">
          {t("events.upcomingEvents")}
        </h2>
        <p className="text-3xl font-bold text-primary mt-2">
          {t("events.joinCommunityInitiatives")}
        </p>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          {t("events.stayUpdated")}
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
