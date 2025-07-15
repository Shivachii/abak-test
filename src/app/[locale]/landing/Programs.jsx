import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UnderlineLink from "@/components/Animations/Underline";
import { urlFor } from "../../../../sanity/lib/image";

export default function Programs({ data }) {
  return (
    <section className="w-full bg-tertiary/10 px-4 py-8 ">
      <div className="px-4 py-16">
        <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase text-center">
          {data.title}
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-center text-primary mt-2">
          {data.subtitle}
        </p>
        <p className="md:text-center text-justify text-gray-500 max-w-3xl mx-auto my-4 text-lg leading-relaxed">
          {data.description}
        </p>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 my-8">
          {data.items?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={urlFor(item.image).url()}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
                {item.href && (
                  <Link href={item.href}>
                    <Button variant="outline" className="mt-2">
                      {data.buttonText || "Learn More"}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <UnderlineLink
            linkText={data.linkText || "See All Programs"}
            href={data.ctaLink || "programs"}
          />
        </div>
      </div>
    </section>
  );
}
