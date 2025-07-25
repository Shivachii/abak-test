import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getIcon } from "@/helpers/objectivesIconMapper";

export const ContentRenderer = ({ objective }) => {
  const { contentType, image, imagePosition } = objective;

  const renderContent = () => {
    switch (contentType) {
      case "simple-list":
        return (
          <div className="flex-1 space-y-5">
            {objective.simpleItems?.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div key={index} className="flex items-start gap-3">
                  <IconComponent
                    className="text-secondary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800">{item.label}</p>
                </div>
              );
            })}
          </div>
        );

      case "strategies":
        return (
          <div className="flex-1">
            <h4 className="text-secondary text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
              {objective.strategiesTitle || "Strategies for Implementation"}
            </h4>
            <ul className="space-y-3">
              {objective.strategies?.map((strategy, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <CheckCircle
                    className="mt-1 text-primary flex-shrink-0"
                    size={20}
                  />
                  <span>{strategy}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "support-areas":
        return (
          <div className="flex-1 space-y-6">
            {objective.supportAreas?.map((section, index) => (
              <div key={index}>
                <h5 className="text-lg font-semibold text-secondary mb-2">
                  {section.title}
                </h5>
                <ul className="space-y-2">
                  {section.items?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle
                        className="mt-1 text-primary flex-shrink-0"
                        size={18}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "learning-features":
        return (
          <div className="flex-1 space-y-6">
            {objective.learningFeatures?.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div key={index} className="flex items-start gap-3">
                  <IconComponent
                    className="text-secondary mt-1 flex-shrink-0"
                    size={22}
                  />
                  <p className="text-gray-800">{feature.description}</p>
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  const imageElement = image && (
    <div className="hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
      <Image
        src={image.asset.url}
        alt={image.alt}
        width={400}
        height={300}
        className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
      />
    </div>
  );

  // Determine layout based on imagePosition
  const isReversed = imagePosition === "left";
  const flexDirection = isReversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex flex-col ${flexDirection} gap-10 items-start`}>
      {renderContent()}
      {imageElement}
    </div>
  );
};
