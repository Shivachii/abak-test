"use client";

import Banner from "@/components/Banner/Banner";
import { useTranslations } from "next-intl";

export default function MubaligheenTrainingPage() {
  const t = useTranslations("mubaligheenTraining");

  const trainingAreas = t.raw("trainingAreas.list") as string[];

  return (
    <section className="max-w-7xl mx-auto  space-y-12">
      <Banner backgroundImage="/banners/training.png" />
      <section className="px-4 py-16 bg-gray-50">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {t("intro")}
          </p>
        </div>

        {/* Why Training is Important */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {t("whyImportant")}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t("description")}</p>
        </div>

        {/* Key Areas of Training */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {t("trainingAreas.title")}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-800 list-disc list-inside">
            {trainingAreas.map((item, idx) => (
              <li key={idx} className="text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Symposium Section */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {t("symposium.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t("symposium.body")}</p>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto bg-primary/10 p-6 md:p-8 rounded-xl border border-primary text-center shadow-md">
          <p className="text-lg font-medium text-gray-800">{t("cta")}</p>
        </div>
      </section>
    </section>
  );
}
