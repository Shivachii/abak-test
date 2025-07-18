import Banner from "@/components/Banner/Banner";
import HawzaEnrollmentCTA from "@/components/CTA/HawzaEnrollmentCTA";
import ScholarshipSection from "./scholarship";
import Image from "next/image";
import ImageGrid from "./imagegrid";
import { Activity, Binoculars, Target } from "lucide-react";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { HAWZA_PAGE_QUERY } from "../../../../../sanity/lib/pageQueries";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "hawza",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("title")} | AhlulBayt Assembly of Kenya`,
    description: t("subtitle"),
    keywords: [
      "Hawza studies Kenya",
      "Islamic seminary Nairobi",
      "Shia education",
      "AhlulBayt learning",
      "Islamic curriculum Kenya",
      "Religious education East Africa",
    ],
    openGraph: {
      title: `${t("title")} | AhlulBayt Assembly of Kenya`,
      description: t("subtitle"),
      url: `${baseUrl}/${params.locale}/hawza`,
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/hawza/img29.jpg`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${params.locale}/hawza`,
    },
  };
}

export default async function Hawza({ params }) {
  const { locale } = params;
  const { data } = await sanityFetch({
    query: HAWZA_PAGE_QUERY,
    params: { lang: locale },
  });

  return (
    <section>
      <Banner backgroundImage="/banners/hawza.png" />

      <div className="w-full px-4 py-12 text-foreground">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* About Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="space-y-4 max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-primary">
                {data.about.title}
              </h1>
              <h2 className="text-secondary text-sm md:text-base font-bold uppercase tracking-wider">
                {data.about.subtitle}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                {data.about.description}
              </p>
            </div>
            <div>
              <ImageGrid />
            </div>
          </div>

          {/* Establishment */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {data.establishment.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                {["vision", "mission", "impact"].map((key) => {
                  const Icon =
                    key === "vision" ? (
                      <Binoculars />
                    ) : key === "mission" ? (
                      <Target />
                    ) : (
                      <Activity />
                    );
                  return (
                    <div key={key} className="p-4">
                      <h3 className="text-xl font-semibold text-secondary mb-2 flex items-center gap-3">
                        {Icon} {data.establishment[key].title}
                      </h3>
                      <p className="text-gray-700">
                        {data.establishment[key].description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full lg:w-1/2 flex items-center">
                <Image
                  src="/hawza/img29.jpg"
                  alt="Hawza Visual"
                  width={700}
                  height={700}
                  className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
                />
              </div>
            </div>
          </div>

          {/* Admissions and Students */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Admission Criteria */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-primary">
                  {data.admissionsSection.title}
                </h2>
                <div className="space-y-6">
                  {data.admissionsSection.admissions.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Profiles */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-primary">
                  {data.studentsSection.title}
                </h2>
                <div className="space-y-6">
                  {data.studentsSection.students.map((i) => (
                    <div
                      key={i._key}
                      className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {i.title}
                      </h3>
                      <p className="text-gray-700">{i.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {data.curriculumSection?.title}
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 space-y-6">
                {data.curriculumSection?.curriculum?.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
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
              {data.Facilities.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.Facilities.facilities.map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded shadow-sm">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <HawzaEnrollmentCTA />

          {/* Scholarship Section */}
          <ScholarshipSection
            heading={data.scholarshipSection.heading}
            intro={data.scholarshipSection.intro}
            details={data.scholarshipSection.details}
            impact={data.scholarshipSection.impact}
            types={data.scholarshipSection.types}
            imageUrl={data.scholarshipSection.image?.asset?.url}
          />

          {/* Support Section */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {data.support.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {data.support.description}
            </p>
            <div className="bg-gray-100 p-4 rounded max-w-xl mx-auto text-left space-y-1">
              {data.support.bank_details.map((item, i) => (
                <p key={i}>
                  <strong>{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
