import Banner from "@/components/Banner/Banner";
import Publications from "@/components/Publications/Publications";
import { useTranslations } from "next-intl";

export default function PublicationsPage() {
  const t = useTranslations("publications");

  return (
    <section className="max-w-7xl mx-auto ">
      <Banner title={t("title")} subtitle={t("subtitle")} />

      <Publications />
    </section>
  );
}
