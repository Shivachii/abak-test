"use client";

import { useTranslations } from "next-intl";
import FadeInSection from "@/components/Animations/FadeInSection";
import { User } from "lucide-react";

export default function LeadershipSection() {
  const t = useTranslations("leadership");
  const roles = [
    {
      key: "chairman",
    },
    {
      key: "viceChairman",
    },
    {
      key: "treasurer",
    },
    {
      key: "secretary",
    },
    {
      key: "countyrepresentatives",
    },
    {
      key: "womenwingrepresentatives",
    },
    {
      key: "youthleader",
    },
  ];

  return (
    <div className="space-y-8 py-12">
      <FadeInSection>
        <section className="py-12 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold my-4 text-primary text-center">
            {t("title")}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-10">
            {t("description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map(({ key }) => (
              <LeadershipCard
                key={key}
                title={t(`offices.${key}.title`)}
                description={t(`offices.${key}.description`)}
              />
            ))}
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}

export function LeadershipCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white shadow-sm border rounded-xl p-6 text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center text-3xl text-gray-400">
        <User size={30} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
