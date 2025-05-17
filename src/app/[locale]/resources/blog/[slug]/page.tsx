"use client";

import { useTranslations } from "next-intl";

export default function UpcomingPostsComingSoonPage({
  params,
}: {
  params: { slug: string };
}) {
  const t = useTranslations("Posts");

  return (
    <section className="w-full px-4 py-40 flex flex-col items-center justify-center bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold text-primary mb-6">
        {t("comingSoon")}
      </h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        {t("comingSoonDescription")}
      </p>
    </section>
  );
}
