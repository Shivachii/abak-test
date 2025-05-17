"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Banner from "@/components/Banner/Banner";

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const items = ["hawza", "clinics", "education", "media"];

  return (
    <section className="w-full max-w-7xl mx-auto ">
      <Banner
        title={t("title")}
        subtitle={t("description")}
        backgroundImage=""
      />
      <div className="px-4 py-16">
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
      </div>
    </section>
  );
}
