import UnderlineLink from "@/components/Animations/Underline";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full px-4 py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            About Us
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
            The Ahlul-Bayt Assembly of Kenya
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The Ahlul Bayt (a.s) Assembly of Kenya (ABAK) is a non-profit
            organization committed to promoting the noble teachings of Islam as
            conveyed by the Ahlul Bayt (a.s), the pure progeny of our beloved{" "}
            <span className="font-semibold">Prophet Muhammad (s.a.w.w)</span>.
            Our goal is to foster success in both this life and the hereafter,
            by sharing these teachings with the broader community.
          </p>
          <UnderlineLink linkText="Learn more about us" href="about" />
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square md:aspect-video w-full h-auto rounded-md overflow-hidden shadow-md">
            <Image
              src="/mosqueteachings.jpeg"
              alt="teachings in a mosque"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
