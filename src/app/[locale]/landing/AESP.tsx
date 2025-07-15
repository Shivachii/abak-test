import UnderlineLink from "@/components/Animations/Underline";
import { AESPSectionData } from "../../../../lib/sanityPageTypes/types";

export default function AESPSection({ data }: { data: AESPSectionData }) {
  return (
    <section id="aesp" className="p-4 md:py-5 ">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12 items-start">
          {/* Title + Intro */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              {data.title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {data.intro}
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-left">
              {data.requirementsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-xl p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {data.requirementsGroupOne?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white shadow-sm rounded-xl p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {data.requirementsGroupTwo?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-600 text-center md:text-left">
              <strong className="italic">{data.disclaimer}</strong>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <UnderlineLink
            href={data.ctaLink || "aesp"}
            linkText={data.ctaText || "Learn more about AESP"}
          />
        </div>
      </div>
    </section>
  );
}
