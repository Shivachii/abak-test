"use client";
import Image from "next/image";
import LeaderBanner from "@/components/Banner/LeadershipBanner";
import { useTranslations } from "next-intl";
import FadeInSection from "@/components/Animations/FadeInSection";

export default function LeadershipSection() {
  const t = useTranslations("leadership");

  return (
    <div className="space-y-8 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-primary text-center">
        {t("title")}
      </h2>

      <LeaderBanner
        leaderName={t("chairman.title")}
        backgroundImage="/mashallah.jpg"
        height="h-[200px]"
      />
      <FadeInSection delay={0.2}>
        {/* Chairman */}
        <div className="flex flex-col md:flex-row gap-8 items-center mx-auto px-4 max-w-6xl">
          <Image
            src="/images/sheikh-samojah.jpg"
            alt={t("chairman.name")}
            width={300}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
          <div className="flex-1 space-y-3 md:w-1/2">
            <h3 className="text-xl font-semibold text-secondary">
              {t("chairman.name")}
            </h3>
            <p className="text-gray-700">{t("chairman.description")}</p>
          </div>
        </div>
      </FadeInSection>

      <LeaderBanner
        leaderName={t("viceChairman.title")}
        backgroundImage="/mashallah.jpg"
        height="h-[200px]"
      />
      <FadeInSection delay={0.3}>
        {/* Vice Chairman */}
        <div className="flex flex-col md:flex-row gap-8 items-center mx-auto px-4 max-w-6xl">
          <Image
            src="/images/sheikh-shughuli.jpg"
            alt={t("viceChairman.name")}
            width={300}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
          <div className="flex-1 space-y-3 md:w-1/2">
            <h3 className="text-xl font-semibold text-secondary">
              {t("viceChairman.name")}
            </h3>
            <p className="text-gray-700">{t("viceChairman.description")}</p>
          </div>
        </div>
      </FadeInSection>

      <LeaderBanner
        leaderName={t("treasurer.title")}
        backgroundImage="/mashallah.jpg"
        height="h-[200px]"
      />
      <FadeInSection delay={0.4}>
        {/* Treasurer */}
        <div className="flex flex-col md:flex-row gap-8 items-center mx-auto px-4 max-w-6xl">
          <Image
            src="/images/sheikh-mwanjirani.jpg"
            alt={t("treasurer.name")}
            width={300}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
          <div className="flex-1 space-y-3 md:w-1/2">
            <h3 className="text-xl font-semibold text-secondary">
              {t("treasurer.name")}
            </h3>
            <p className="text-gray-700">{t("treasurer.description")}</p>
          </div>
        </div>
      </FadeInSection>

      {/* Secretary */}
      <LeaderBanner
        leaderName={t("secretary.title")}
        backgroundImage="/mashallah.jpg"
        height="h-[200px]"
      />
      <FadeInSection delay={0.5}>
        <div className="flex flex-col md:flex-row gap-8 items-center mx-auto px-4 max-w-6xl">
          <Image
            src="/images/athman-farsiy.jpg"
            alt={t("secretary.name")}
            width={300}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
          <div className="flex-1 space-y-3 md:w-1/2">
            <h3 className="text-xl font-semibold text-secondary">
              {t("secretary.name")}
            </h3>
            <p className="text-gray-700">{t("secretary.description")}</p>
          </div>
        </div>
      </FadeInSection>
      {/* Members */}
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <h3 className="text-xl font-semibold text-secondary mt-12">
          {t("members.title")}
        </h3>
        <p className="text-gray-700">{t("members.description")}</p>
      </div>
    </div>
  );
}
