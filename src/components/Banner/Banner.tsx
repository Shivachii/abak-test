import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  height?: string; // e.g., h-[400px]
}

export default function Banner({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  height = "h-[400px]",
}: BannerProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image (if provided) */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt="Banner background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary text-black">
          {/* Abstract shapes (Tailwind utility based shapes) */}
          {/* <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-white rounded-full translate-y-[200px]" /> */}
        </div>
      )}

      {/* Text Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 ${
          backgroundImage ? "text-white" : "text-white "
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg mt-3 font-medium tracking-wide">
            {subtitle}
          </p>
        )}
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className={`mt-6 px-6 py-3 rounded-md font-semibold transition ${
              backgroundImage
                ? "bg-primary text-black hover:bg-primary/90"
                : "bg-white text-primary hover:bg-gray-200"
            }`}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
