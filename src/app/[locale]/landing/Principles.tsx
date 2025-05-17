"use client";

import { CheckCircle, Rocket, Target } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CorePrinciples() {
  const t = useTranslations("CorePrinciples");

  const principles = [
    "faithfulness",
    "unity",
    "inclusivity",
    "community",
    "empowerment",
    "accountability",
  ];

  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Core Values */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-secondary text-sm font-bold tracking-widest uppercase">
              {t("values.heading")}
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-primary mt-2">
              {t("values.title")}
            </p>
            <p className="mt-3 text-gray-700 text-base md:text-lg">
              {t("values.description")}
            </p>
          </div>

          <div className="bg-tertiary/10 border-l-8 border-tertiary rounded-md shadow-sm p-6">
            <ul className="space-y-4">
              {principles.map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <CheckCircle className="text-tertiary shrink-0" size={18} />
                  <span className="text-gray-800 font-medium leading-relaxed">
                    {t(`values.principles.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-6">
          <h2 className="text-secondary text-sm font-bold tracking-widest uppercase">
            {t("mv.heading")}
          </h2>
          <div className="p-5 rounded-xl shadow-sm border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-secondary" size={22} />
              <h3 className="text-xl font-semibold text-gray-600">
                {t("mv.mission.title")}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("mv.mission.description")}
            </p>
          </div>
          <div className="p-5 rounded-xl shadow-sm border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="text-secondary" size={22} />
              <h3 className="text-xl font-semibold text-gray-600">
                {t("mv.vision.title")}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("mv.vision.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
