import Publications from "@/components/Publications/Publications";
import { useTranslations } from "next-intl";

export default function PublicationsPage() {
  const t = useTranslations("publications");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">{t("title")}</h1>
        <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>
      </div>

      <>
        <Publications />
      </>
    </div>
  );
}
