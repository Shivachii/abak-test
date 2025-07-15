import { type Metadata } from "next";
import { getTranslations } from "next-intl/server";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sanityFetch } from "../../../../sanity/lib/live";
import { DONATE_PAGE_QUERY } from "../../../../sanity/lib/pageQueries";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "donate",
  });

  const baseUrl = process.env.NEXT_BASE_PUBLIC_URL || "http://localhost:3000";

  return {
    title: `${t("title")} | AhlulBayt Assembly of Kenya`,
    description: t("intro"),
    keywords: [
      "donate ABAK",
      "Islamic donation Kenya",
      "charity M-Pesa Kenya",
      "AhlulBayt donation",
      "sponsor Islamic programs",
      "Zakat Kenya",
      "donate education Kenya",
      "ABAK M-Pesa Paybill",
    ],
    openGraph: {
      title: `${t("title")} | AhlulBayt Assembly of Kenya`,
      description: t("intro"),
      url: `${baseUrl}/${params.locale}/donate`,
      siteName: "AhlulBayt Assembly of Kenya",
      locale: params.locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${params.locale}/donate`,
    },
  };
}

type DonatePageProps = {
  params: { locale: string };
};

export default async function DonatePage({
  params: { locale },
}: DonatePageProps) {
  const { data } = await sanityFetch({
    query: DONATE_PAGE_QUERY,
    params: { lang: locale },
  });

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {data?.title}
        </h1>
        <p className="text-gray-700 text-lg">{data?.description}</p>
      </div>

      <div className="bg-tertiary/10 border border-tertiary p-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-secondary">{data?.waysTitle}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {data?.methods?.map((method: string, idx: number) => (
            <li key={idx}>{method}</li>
          ))}

          {data?.bankInfo && (
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="bank-transfer">
                  <AccordionTrigger className="text-gray-800">
                    Bank Transfer
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700 space-y-1">
                    <p>
                      <span className="font-medium">Bank:</span>{" "}
                      {data.bankInfo.bank}
                    </p>
                    <p>
                      <span className="font-medium">Branch:</span>{" "}
                      {data.bankInfo.branch}
                    </p>
                    <p>
                      <span className="font-medium">Account Name:</span>{" "}
                      {data.bankInfo.accountName}
                    </p>

                    <div>
                      <p className="font-medium">Account Numbers:</p>
                      <ul className="list-disc list-inside ml-4">
                        {data.bankInfo.accounts.map(
                          (acc: { label: string; number: string }) => (
                            <li key={acc.number}>
                              <span className="font-medium">{acc.label}:</span>{" "}
                              {acc.number}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
