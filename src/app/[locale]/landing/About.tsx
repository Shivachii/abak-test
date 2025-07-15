import UnderlineLink from "@/components/Animations/Underline";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";
import { AboutProps } from "../../../../lib/sanityPageTypes/types";

export default function About({ data }: AboutProps) {
  return (
    <section className="w-full px-4 py-8 bg-white my-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            {data.tagline}
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
            {data.title}
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {data.intro}
            <span className="font-semibold">{data.intromid}</span>.{" "}
            {data.intro2}
          </p>
          <UnderlineLink linkText={data.linkText} href="about" />
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[350px] rounded-md overflow-hidden shadow-md">
            {data.image ? (
              <Image
                src={urlFor(data.image).url()}
                alt="about us"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
