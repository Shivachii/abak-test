import { GraduationCap, BookOpenCheck, Globe } from "lucide-react";
import Image from "next/image";

export type IconKey = "GraduationCap" | "BookOpenCheck" | "Globe";

const icons: Record<IconKey, JSX.Element> = {
  GraduationCap: <GraduationCap className="text-primary w-8 h-8 mt-1" />,
  BookOpenCheck: <BookOpenCheck className="text-primary w-8 h-8 mt-1" />,
  Globe: <Globe className="text-primary w-8 h-8 mt-1" />,
};

export type ScholarshipType = {
  icon: string;
  title: string;
  description: string;
};

type ScholarshipSectionProps = {
  heading: string;
  intro: string;
  details: string;
  impact: string;
  types: ScholarshipType[];
  imageUrl?: string;
};

export default function ScholarshipSection({
  heading,
  intro,
  details,
  impact,
  types,
  imageUrl,
}: ScholarshipSectionProps) {
  return (
    <section className="bg-muted/50 py-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {heading}
          </h2>
          <p className="text-gray-700 text-lg mb-4">{intro}</p>
          <p className="text-gray-700 text-lg mb-4">{details}</p>
          <p className="text-gray-700 text-lg mb-6">{impact}</p>

          {/* Scholarship Types */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-shrink-0">
            {types.map((type, index) => {
              const icon = icons[type.icon as IconKey] ?? (
                <GraduationCap className="text-primary w-8 h-8 mt-1" />
              );

              return (
                <div key={index} className="flex items-start gap-4">
                  {icon}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {type.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional Image */}
        {imageUrl && (
          <div className="hidden lg:block">
            <Image
              src={imageUrl}
              alt={heading}
              width={400}
              height={400}
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
