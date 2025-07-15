// app/[locale]/programs/mubaligheen-training/page.tsx
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { MUBALIGHEEN_TRAINING_QUERY } from "../../../../../sanity/lib/pageQueries";

export default async function MubaligheenTrainingPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data } = await sanityFetch({
    query: MUBALIGHEEN_TRAINING_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="max-w-7xl mx-auto space-y-12">
      <Banner backgroundImage="/banners/training.png" />

      <section className="px-4 py-16 bg-gray-50 space-y-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {data?.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {data?.intro}
          </p>
        </div>

        {/* Why Training is Important */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden max-w-5xl mx-auto p-6 md:p-8">
          <div className="w-full md:w-1/2">
            <Image
              src={data?.image1}
              alt="Why training is important"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              {data?.whyImportant}
            </h2>
            <p className="text-gray-700 leading-relaxed">{data?.description}</p>
          </div>
        </div>

        {/* Key Areas of Training */}
        <div className="items-center gap-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden max-w-5xl mx-auto p-6 md:p-8">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Key Areas of Training
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-800 list-disc list-inside">
              {data?.trainingAreas.map((item: string, idx: number) => (
                <li key={idx} className="text-base leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Symposium Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden max-w-5xl mx-auto p-6 md:p-8">
          <div className="w-full md:w-1/2">
            <Image
              src={data?.image2}
              alt="Mubaligheen Symposium"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              {data?.symposiumTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data?.symposiumBody}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto bg-primary/10 p-6 md:p-8 rounded-xl border border-primary text-center shadow-md">
          <p className="text-lg font-medium text-gray-800">{data?.cta}</p>
        </div>
      </section>
    </section>
  );
}
