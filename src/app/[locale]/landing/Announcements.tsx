"use client";

import UnderlineLink from "@/components/Animations/Underline";
import { useTranslations } from "next-intl";

const announcements = [
  {
    key: "monthlyDonation",
    href: "donate",
  },
  {
    key: "ramadhanRelief",
    href: "programs",
  },
  {
    key: "muharramPrograms",
    href: "events",
  },
];

export default function AnnouncementsSection() {
  const t = useTranslations("Announcements");

  return (
    <section className="w-full bg-tertiary/10 px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            {t("heading")}
          </h2>

          <p className="text-2xl md:text-3xl font-bold text-primary mt-2">
            {t("title")}
          </p>
          <p className="mt-2 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item) => (
            <div
              key={item.key}
              className="bg-white border-l-4 border-tertiary rounded-lg shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t(`${item.key}.description`)}
                </p>
              </div>
              <UnderlineLink linkText={t(`${item.key}.cta`)} href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
