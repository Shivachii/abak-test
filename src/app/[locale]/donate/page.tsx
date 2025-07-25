import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sanityFetch } from "../../../../sanity/lib/live";
import { DONATE_PAGE_QUERY } from "../../../../sanity/lib/queries/pageQueries/pageQueries";
import { generatePageMetadata } from "@/hooks/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "donatePage",
  });
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

          {data?.bankInfo.bankDetails.accounts.map && (
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="bank-transfer">
                  <AccordionTrigger className="text-gray-800">
                    Bank Transfer
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700 space-y-1">
                    <p>
                      <span className="font-medium">Bank:</span>{" "}
                      {data.bankInfo.bankDetails.bank}
                    </p>
                    <p>
                      <span className="font-medium">Branch:</span>{" "}
                      {data.bankInfo.bankDetails.branch}
                    </p>
                    <p>
                      <span className="font-medium">Account Name:</span>{" "}
                      {data.bankInfo.bankDetails.accountName}
                    </p>

                    <div>
                      <p className="font-medium">Account Numbers:</p>
                      <ul className="list-disc list-inside ml-4">
                        {data.bankInfo.bankDetails.accounts.map(
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
