"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const items = ["hawza", "clinics", "education", "media"];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {t("title")}
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">{t("description")}</p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {items.map((key) => (
          <div
            key={key}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={t(`items.${key}.image`)}
              alt={t(`items.${key}.title`)}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-secondary">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-gray-700 text-sm">
                {t(`items.${key}.description`)}
              </p>
              <Link href={t(`items.${key}.href`)}>
                <Button variant="outline" className="mt-2">
                  {t("button")}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
