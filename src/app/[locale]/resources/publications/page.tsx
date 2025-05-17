"use client";

import { useTranslations } from "next-intl";

const publications = [
  {
    id: 1,
    title: "Annual Report 2024",
    description:
      "An overview of our activities, impact, and financials for the year 2024.",
    link: "/publications/annual-report-2024.pdf",
  },
  {
    id: 2,
    title: "Faith in Action",
    description:
      "A collection of community stories and reflections from our scholars and volunteers.",
    link: "/publications/faith-in-action.pdf",
  },
  {
    id: 3,
    title: "Women in Leadership",
    description:
      "Insights and impact stories from our female-led initiatives in Kenya.",
    link: "/publications/women-in-leadership.pdf",
  },
  {
    id: 4,
    title: "Our Company Profile",
    description: "A comprehensive overview of our mission, vision, and values.",
    link: "/publications/companyprofile.pdf",
  },
];

export default function PublicationsPage() {
  const t = useTranslations("publications");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">{t("title")}</h1>
        <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="bg-white shadow rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {pub.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{pub.description}</p>
            </div>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-primary font-medium hover:underline"
            >
              {t("view_button")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
