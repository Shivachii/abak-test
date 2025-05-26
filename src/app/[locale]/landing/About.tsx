import UnderlineLink from "@/components/Animations/Underline";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="w-full px-4 py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            {t("aboutUs")}
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
            {t("title")}
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {t("intro")}
            <span className="font-semibold">{t("intromid")}</span>.{" "}
            {t("intro2")}
          </p>
          <UnderlineLink linkText={t("linkText")} href="about" />
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative  w-full h-[350px] rounded-md overflow-hidden shadow-md">
            <Image
              src="/mosqueteachings.jpeg"
              alt="teachings in a mosque"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
