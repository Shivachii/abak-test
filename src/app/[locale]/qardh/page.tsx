// app/[locale]/qardh-hassanah/page.tsx
import { QardhForm } from "@/components/Forms/QardhForm";
import { Metadata } from "next";
import { sanityFetch } from "../../../../sanity/lib/live";
import { QARDH_PAGE_QUERY } from "../../../../sanity/lib/pageQueries";

export const metadata: Metadata = {
  title: "ABAK – Qardh Hassanah Fund",
  description:
    "Ethical, interest-free financial assistance by AhlulBayt Assembly of Kenya",
};

export default async function QardhHassanahPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data } = await sanityFetch({
    query: QARDH_PAGE_QUERY,
    params: { lang: params.locale },
  });

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 bg-slate-50 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            {data?.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">{data?.subtitle}</p>
        </section>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-secondary">
            {data?.summaryTitle}
          </h2>
          <p>{data?.summary}</p>
        </section>

        {/* Objectives & Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              {data?.objectivesTitle}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.objectives?.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              {data?.benefitsTitle}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.benefits?.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Governance & Eligibility */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-secondary">
              {data?.governanceTitle}
            </h3>
            <p>{data?.governance}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-secondary">
              {data?.eligibilityTitle}
            </h3>
            <p>{data?.eligibility}</p>
          </div>
        </section>

        {/* Loan Process Overview */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-secondary">
            {data?.loanProcessTitle}
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {data?.loanProcessSteps?.map((step: string) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Challenges and Future Prospects */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-secondary">
              {data?.challengesTitle}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.challenges?.map((c: string) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary">
              {data?.futureTitle}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.future?.map((f: string) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {data?.applyTitle}
          </h2>
          <QardhForm />
        </section>
      </div>
    </main>
  );
}
