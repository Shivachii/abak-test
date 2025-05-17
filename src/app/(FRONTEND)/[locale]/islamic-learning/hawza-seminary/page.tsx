import Banner from "@/components/Banner/Banner";
import React from "react";
import { Activity, Binoculars, Target } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hawza = () => {
  const t = useTranslations("hawza");
  return (
    <section>
      <Banner
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="/hawza/IMG19.JPG"
      />
      <div className="w-full px-4 py-12 bg-white text-foreground">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* About Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-primary">
              {t("about")}
            </h1>
            <h2 className="text-secondary text-sm md:text-base font-bold uppercase tracking-wider">
              {t("about_subtitle")}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto text-justify md:text-center">
              {t("about_description")}
            </p>
          </div>

          {/* Establishment */}
          <div className="space-y-6  ">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {t("establishment")}
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                {[
                  {
                    title: t("vision"),
                    icon: <Binoculars />,
                    desc: t("vision_desc"),
                  },
                  {
                    title: t("mission"),
                    icon: <Target />,
                    desc: t("mission_desc"),
                  },
                  {
                    title: t("impact"),
                    icon: <Activity />,
                    desc: t("impact_desc"),
                  },
                ].map((item) => (
                  <div key={item.title} className=" p-4 ">
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
                  alt="Hawza iMAGE"
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
                  {t("admissions_criteria")}
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Educational Background",
                      desc: "Applicants must have successfully completed high school and earned their KCSE certification.",
                    },
                    {
                      title: "Age Requirement",
                      desc: "Students must be at least 18 years of age to be eligible for admission.",
                    },
                    {
                      title: "Commitment to Learning",
                      desc: "A strong passion for Islamic studies and a dedication to academic excellence are essential.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Profile */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-primary">
                  Student Profile
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Diverse Backgrounds",
                      desc: "Students come from various regions and socioeconomic backgrounds, fostering a rich and inclusive learning environment.",
                    },
                    {
                      title: "Academic Achievements",
                      desc: "Selected students demonstrate exceptional academic performance, most achieving top KCSE scores.",
                    },
                    {
                      title: "Shared Passion",
                      desc: "Each student shares a deep commitment to Islamic studies and leadership in their communities.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              Curriculum and Programs
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                {[
                  {
                    title: "Core Curriculum",
                    desc: "Students receive a well-rounded foundation in Islamic studies and community leadership.",
                  },
                  {
                    title: "Specialized Tracks",
                    desc: "Focused study in Islamic history, Arabic language, and interfaith dialogue.",
                  },
                  {
                    title: "Practical Training",
                    desc: "Hands-on workshops and internships that build leadership and community service skills.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Image */}
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
              {t("facilities")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Extensive Library",
                  desc: "A vast collection of Islamic texts, journals, and digital resources.",
                },
                {
                  title: "Lecture Halls",
                  desc: "Modern halls equipped with educational tech for interactive learning.",
                },
                {
                  title: "Computer Labs",
                  desc: "Digital workspaces for writing, research, and skill development.",
                },
                {
                  title: "Prayer Facilities",
                  desc: "Spacious and serene spaces for daily prayers and spiritual growth.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 p-4 rounded shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {t("support_section")}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t("support_section_p")}
            </p>
            <div className="bg-gray-100 p-4 rounded max-w-xl mx-auto text-left space-y-1">
              <p>
                <strong>Bank:</strong> Diamond Trust Bank, Lavington Branch
              </p>
              <p>
                <strong>Account Name:</strong> Ahlulbayt (a.s) Assembly
              </p>
              <p>
                <strong>Account Type:</strong> Current Account
              </p>
              <p>
                <strong>KES Account:</strong> 0025429001
              </p>
              <p>
                <strong>USD Account:</strong> 0025429002
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hawza;
