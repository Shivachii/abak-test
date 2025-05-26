import { useTranslations } from "next-intl";
// import DonationbyMpesaDialog from "@/components/Dialogs/DonationbyMpesa";

import { type Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          url: `${baseUrl}/opengraph-image.png`, // Customize with your OG image
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

export default function DonatePage() {
  const t = useTranslations("donate");

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {t("title")}
        </h1>
        <p className="text-gray-700 text-lg">{t("description")}</p>
      </div>

      <div className="bg-tertiary/10 border border-tertiary p-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-secondary">{t("waysTitle")}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Mobile Money (M-Pesa Paybill)</li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="bank-transfer">
                <AccordionTrigger className=" text-gray-800">
                  Bank Transfer
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">Bank:</span> Diamond Trust
                    Bank
                  </p>
                  <p>
                    <span className="font-medium">Branch:</span> Lavington
                    Branch
                  </p>
                  <p>
                    <span className="font-medium">Account Name:</span> Ahlulbayt
                    (a.s) Assembly
                  </p>

                  <div>
                    <p className="font-medium">Account Numbers:</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        <span className="font-medium">KES:</span> 0025429001
                      </li>
                      <li>
                        <span className="font-medium">USD:</span> 0025429002
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          <li>Direct Cash or Cheque</li>
          <li>Sponsorship of Programs (Education, Welfare, Da’wah)</li>
        </ul>
      </div>

      {/* <section className="flex gap-8">
        <DonationbyMpesaDialog />
      </section> */}
    </section>
  );
}
