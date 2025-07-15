// app/[locale]/programs/mubaligheen-support/page.tsx
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner/Banner";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { MUBALIGHEEN_SUPPORT_QUERY } from "../../../../../sanity/lib/pageQueries";

export default async function MubaligheenSupportPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data } = await sanityFetch({
    query: MUBALIGHEEN_SUPPORT_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="w-full max-w-7xl mx-auto">
      <Banner backgroundImage="/banners/support.png" />
      <section className="px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {data?.title}
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            {data?.intro}
          </p>
        </div>

        {/* Image & Description */}
        <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow">
            <Image
              src={data?.imageUrl}
              alt="Mubaligheen Support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-secondary">
              {data?.whySupport}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {data?.description}
            </p>
          </div>
        </div>

        {/* Support Areas */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Support Areas
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            {data?.supportAreas.map((area: string, i: number) => (
              <li key={i}>{area}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary/90 transition"
          >
            {data?.cta}
          </Link>
        </div>
      </section>
    </section>
  );
}
