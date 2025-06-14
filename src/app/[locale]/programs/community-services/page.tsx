import Banner from "@/components/Banner/Banner";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CommunityPage = () => {
  const t = useTranslations("communityServices.services");
  const w = useTranslations("communityServices");

  const sections = [
    {
      key: "health",
      title: t("health.title"),
      description: t("health.description"),
      image: "/images/health-clinic.jpg",
    },
    {
      key: "islamicMedicine",
      title: t("islamicMedicine.title"),
      description: t("islamicMedicine.description"),
      image: "/images/prophetic-medicine.jpg",
    },
    {
      key: "disasterResponse",
      title: t("disasterResponse.title"),
      description: t("disasterResponse.description"),
      image: "/images/disaster-relief.jpg",
    },
    {
      key: "counseling",
      title: t("counseling.title"),
      description: t("counseling.description"),
      image: "/images/counseling.jpg",
    },
    {
      key: "reliefPrograms",
      title: t("reliefPrograms.title"),
      description: t("reliefPrograms.description"),
      image: "/images/relief.jpg",
    },
    {
      key: "economicUpliftment",
      title: t("economicUpliftment.title"),
      description: t("economicUpliftment.description"),
      image: "/images/economic-empowerment.jpg",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto">
      {/* Banner */}
      <Banner backgroundImage="/banners/community.png" />

      {/* Content */}
      <section className="px-4 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary mb-4">{w("title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{w("subtitle")}</p>
        </div>

        <div className="grid gap-10">
          {sections.map((item, idx) => (
            <div
              key={item.key}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-56 md:h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-justify md:text-start leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CommunityPage;
