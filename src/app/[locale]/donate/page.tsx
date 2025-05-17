import { useTranslations } from "next-intl";
import DonationDialog from "@/components/Dialogs/Donation";

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
          <li>Bank Transfer</li>
          <li>Direct Cash or Cheque</li>
          <li>Sponsorship of Programs (Education, Welfare, Da’wah)</li>
        </ul>
      </div>

      <section className="text-center">
        <DonationDialog />
      </section>
    </section>
  );
}
