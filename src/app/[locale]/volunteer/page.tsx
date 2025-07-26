import VolunteerDialog from "@/components/Forms/Volunteer";
import { sanityFetch } from "../../../../sanity/lib/live";
import { VOLUNTEER_PAGE_QUERY } from "../../../../sanity/lib/queries/pageQueries/pageQueries";

import { generatePageMetadata } from "@/hooks/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "volunteerPage",
  });
}

export default async function VolunteerPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data: pageData } = await sanityFetch({
    query: VOLUNTEER_PAGE_QUERY,
    params: { lang: params.locale },
  });

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {pageData?.title}
        </h1>
        <p className="text-gray-700 text-lg">{pageData?.subtitle}</p>
      </div>

      <div className="bg-secondary/10 border border-secondary p-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-secondary">
          {pageData?.opportunityTitle}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {pageData?.opportunities?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <section className="text-center">
        <VolunteerDialog />
      </section>
    </section>
  );
}
