import VolunteerDialog from "@/components/Forms/Volunteer";
import { useTranslations } from "next-intl";

export default function VolunteerPage() {
  const t = useTranslations("volunteer");
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {t("title")}
        </h1>
        <p className="text-gray-700 text-lg">{t("subtitle")}</p>
      </div>

      <div className="bg-secondary/10 border border-secondary p-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-secondary">
          {t("opportunitytitle")}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li> {t("opportunities.one")}</li>
          <li> {t("opportunities.two")}</li>
          <li> {t("opportunities.three")}</li>
          <li> {t("opportunities.four")}</li>
        </ul>
      </div>

      <section className="text-center">
        <VolunteerDialog />
      </section>
    </section>
  );
}
