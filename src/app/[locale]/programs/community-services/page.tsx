import Banner from "@/components/Banner/Banner";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CommunityPage = () => {
  const t = useTranslations("communityServices.services");
  const w = useTranslations("communityServices");

  const groupedSections = [
    {
      image: "/comm.jpg",
      items: [
        {
          key: "health",
          title: t("health.title"),
          description: t("health.description"),
        },
        {
          key: "islamicMedicine",
          title: t("islamicMedicine.title"),
          description: t("islamicMedicine.description"),
        },
        {
          key: "disasterResponse",
          title: t("disasterResponse.title"),
          description: t("disasterResponse.description"),
        },
      ],
    },
    {
      image: "/commserv.jpg",
      items: [
        {
          key: "counseling",
          title: t("counseling.title"),
          description: t("counseling.description"),
        },
        {
          key: "reliefPrograms",
          title: t("reliefPrograms.title"),
          description: t("reliefPrograms.description"),
        },
        {
          key: "economicUpliftment",
          title: t("economicUpliftment.title"),
          description: t("economicUpliftment.description"),
        },
      ],
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

        {/* Grouped sections */}
        <div className="space-y-16">
          {groupedSections.map((group, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-stretch gap-8`}
            >
              {/* Image Block */}
              <div className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={group.image}
                  alt="Community Service"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover"
                />
              </div>

              {/* Cards Block */}
              <div className="w-full md:w-1/2 grid gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.key}
                    className="bg-white p-6 rounded-xl shadow border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm text-justify leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CommunityPage;
