import UnderlineLink from "@/components/Animations/Underline";
import { CheckCircle } from "lucide-react";

export default function QardhSection({ data }) {
  const objectives = data.objectives || [];
  const benefits = data.benefits || [];

  return (
    <section className="p-4 md:py-5 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12">
          {/* Left */}
          <section className="w-full flex flex-col justify-center px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              {data.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              {data.summary}
            </p>

            <div className="p-6 bg-white rounded-xl shadow-sm text-sm md:text-base text-gray-700 space-y-3">
              <p>
                <strong>{data.governanceTitle}:</strong> {data.governance}
              </p>
              <p>
                <strong>{data.eligibilityTitle}:</strong> {data.eligibility}
              </p>
              <p>
                <strong>{data.fundingTitle}:</strong> {data.funding}
              </p>
            </div>
          </section>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left px-2 sm:px-4">
            {/* Objectives */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {data.objectivesTitle}
              </h3>
              <ul className="space-y-2">
                {objectives.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-secondary mt-1 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {data.benefitsTitle}
              </h3>
              <ul className="space-y-2">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-secondary mt-1 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 px-4">
          <UnderlineLink
            href={data.ctaLink || "qardh"}
            linkText={data.ctaText}
          />
        </div>
      </div>
    </section>
  );
}
