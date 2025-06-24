import UnderlineLink from "@/components/Animations/Underline";
import { useTranslations } from "next-intl";

export default function AESPSection() {
  const t = useTranslations("aesp");

  return (
    <section className="p-4 md:py-5 ">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12 items-start">
          {/* Left Section - Title and Intro */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("title")}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {t("intro")}
            </p>
          </div>

          {/* Right Section - Requirements */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-left">
              {t("subsection.title")}
            </h3>

            {/* Requirements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-xl p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{t("subsection.sections.personal")}</li>
                  <li>{t("subsection.sections.academic")}</li>
                  <li>{t("subsection.sections.family")}</li>
                  <li>{t("subsection.sections.financial")}</li>
                </ul>
              </div>
              <div className="bg-white shadow-sm rounded-xl p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{t("subsection.sections.summary")}</li>
                  <li>{t("subsection.sections.documents")}</li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-sm text-gray-600 text-center md:text-left">
              <strong className="italic">{t("disclaimer")}</strong>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-10 text-center">
          <UnderlineLink
            href="aesp"
            linkText={t("cta") ?? "Learn more about AESP"}
          />
        </div>
      </div>
    </section>
  );
}
