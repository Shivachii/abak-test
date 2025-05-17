import Banner from "@/components/Banner/Banner";
import React from "react";
import { Activity, Binoculars, Target } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hawza = () => {
  const t = useTranslations("hawza");

  return (
    <section>
      <Banner title={t("title")} subtitle={t("subtitle")} />
      <div className="w-full px-4 py-12 bg-white text-foreground">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* About Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-primary">
              {t("about.title")}
            </h1>
            <h2 className="text-secondary text-sm md:text-base font-bold uppercase tracking-wider">
              {t("about.subtitle")}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto text-justify md:text-center">
              {t("about.description")}
            </p>
          </div>

          {/* Establishment */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {t("establishment.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                {[
                  {
                    title: t("establishment.vision.title"),
                    icon: <Binoculars />,
                    desc: t("establishment.vision.description"),
                  },
                  {
                    title: t("establishment.mission.title"),
                    icon: <Target />,
                    desc: t("establishment.mission.description"),
                  },
                  {
                    title: t("establishment.impact.title"),
                    icon: <Activity />,
                    desc: t("establishment.impact.description"),
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4">
                    <h3 className="text-xl font-semibold text-secondary mb-2 flex items-center gap-3">
                      {item.icon} {item.title}
                    </h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-1/2 flex items-center">
                <Image
                  src={"/hawza/img29.jpg"}
                  alt="Hawza Visual"
                  width={700}
                  height={700}
                  className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
                />
              </div>
            </div>
          </div>

          {/* Admissions Criteria */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Admission Criteria */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-primary">
                  {t("admissions.title")}
                </h2>
                <div className="space-y-6">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {t(`admissions.criteria.${i}.title`)}
                      </h3>
                      <p className="text-gray-700">
                        {t(`admissions.criteria.${i}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Profile */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-primary">
                  {t("students.title")}
                </h2>
                <div className="space-y-6">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {t(`students.profile.${i}.title`)}
                      </h3>
                      <p className="text-gray-700">
                        {t(`students.profile.${i}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {t("curriculum.title")}
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 space-y-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {t(`curriculum.items.${i}.title`)}
                    </h3>
                    <p className="text-gray-700">
                      {t(`curriculum.items.${i}.description`)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/hawza/img40.jpg"
                  alt="Curriculum Visual"
                  width={700}
                  height={700}
                  className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
                />
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {t("facilities.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 p-4 rounded shadow-sm">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {t(`facilities.items.${i}.title`)}
                  </h3>
                  <p className="text-gray-700">
                    {t(`facilities.items.${i}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {t("support.title")}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t("support.description")}
            </p>
            <div className="bg-gray-100 p-4 rounded max-w-xl mx-auto text-left space-y-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <p key={i}>
                  <strong>{t(`support.bank_details.${i}.label`)}</strong>{" "}
                  {t(`support.bank_details.${i}.value`)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hawza;
