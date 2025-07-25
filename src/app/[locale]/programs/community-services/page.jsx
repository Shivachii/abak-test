import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import { sanityFetch } from "../../../../../sanity/lib/live";
import { COMMUNITY_SERVICES_QUERY } from "../../../../../sanity/lib/queries/pageQueries/pageQueries";
import { generatePageMetadata } from "@/hooks/seo/metadata";

export async function generateMetadata({ params }) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "communityServicesPage",
  });
}

export default async function CommunityPage({ params }) {
  const { data } = await sanityFetch({
    query: COMMUNITY_SERVICES_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="w-full max-w-7xl mx-auto">
      <Banner backgroundImage="/banners/community.jpg" />

      <section className="px-4 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {data?.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data?.subtitle}</p>
        </div>

        <div className="space-y-16">
          {data?.groups.map((group, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-stretch gap-8`}
            >
              <div className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={group.imageUrl}
                  alt="Community Service"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 grid gap-6">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm text-justify leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
