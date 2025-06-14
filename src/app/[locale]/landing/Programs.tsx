import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import UnderlineLink from "@/components/Animations/Underline";

export default function Programs() {
  const t = useTranslations("Projects");
  const items = [
    "hawza",
    "mubaligheenTraining",
    "mubaligheenSupport",
    "communitySupport",
  ];

  return (
    <section className="w-full bg-tertiary/10 px-4 py-8 ">
      <div className="px-4 py-16">
        <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase text-center">
          {t("title")}
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-center text-primary mt-2">
          {t("subtitle")}
        </p>
        <p className="md:text-center text-justify text-gray-500 max-w-3xl mx-auto my-4 text-lg leading-relaxed">
          {t("description")}
        </p>
        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 my-8">
          {items.map((key) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={t(`items.${key}.image`)}
                alt={t(`items.${key}.title`)}
                width={200}
                height={200}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-secondary">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t(`items.${key}.description`)}
                </p>
                <Link href={t(`items.${key}.href`)}>
                  <Button variant="outline" className="mt-2">
                    {t("button")}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <UnderlineLink linkText={t("linkText")} href="programs" />
        </div>
      </div>
    </section>
  );
}
