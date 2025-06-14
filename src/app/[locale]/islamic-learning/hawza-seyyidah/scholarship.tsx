"use client";

import { useTranslations } from "next-intl";
import { GraduationCap, BookOpenCheck, Globe } from "lucide-react";
import Image from "next/image";

export default function ScholarshipSection() {
  const t = useTranslations("hawza.scholarships");

  return (
    <section className="bg-muted/50 py-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-700 text-lg mb-4">{t("intro")}</p>
          <p className="text-gray-700 text-lg mb-4">{t("details")}</p>
          <p className="text-gray-700 text-lg mb-6">{t("impact")}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-shrink-0">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-primary w-8 h-8 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {t("hawzaTitle")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("hawzaDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BookOpenCheck className="text-primary w-8 h-8 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {t("secularTitle")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("secularDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="text-primary w-8 h-8 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {t("globalTitle")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("globalDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Image */}
        <div className="hidden lg:block">
          <Image
            src="/scholarship.jpg"
            alt={t("heading")}
            width={400}
            height={400}
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
