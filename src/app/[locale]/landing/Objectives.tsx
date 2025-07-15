import UnderlineLink from "@/components/Animations/Underline";

import { Props } from "../../../../lib/sanityPageTypes/types";

export default function ProgramsObjectives({ data }: Props) {
  return (
    <section className="w-full px-4 py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            {data.heading}
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mt-2">
            {data.title}
          </p>
          <p className="mt-2 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {data.objectives?.map((obj, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border-l-4 border-tertiary p-5 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {obj.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-start md:justify-end">
          <UnderlineLink linkText={data.ctaText} href="governing-objectives" />
        </div>
      </div>
    </section>
  );
}
