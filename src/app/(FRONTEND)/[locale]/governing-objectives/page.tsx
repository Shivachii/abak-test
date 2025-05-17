import { useTranslations } from "next-intl";
import Banner from "@/components/Banner/Banner";
import { ObjectivesTabs } from "@/components/Tabs/Tabs";

export default function ProgramsObjectives() {
  const t = useTranslations();

  return (
    <div className="w-full">
      <Banner
        title={t("programs.objectivesTitle")}
        backgroundImage="/mosqueteachings.jpeg"
      />
      <div className="px-4 py-12 flex flex-col gap-2 mx-auto max-w-7xl ">
        <h3 className="text-3xl font-bold text-secondary tracking-wide ">
          {t("programs.mainObjectivesHeader")}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t("programs.objectivesDescription")}
        </p>
        <div className="my-4">
          <ObjectivesTabs />
        </div>
      </div>
    </div>
  );
}
