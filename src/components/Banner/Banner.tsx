import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  height?: string; // Tailwind height utility, e.g., h-[400px]
}

export default function Banner({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  height = "", // Default height if not provided
}: BannerProps) {
  return (
    <section
      className={`relative w-full ${height} h-[120px] md:h-full overflow-hidden bg-white`}
    >
      {/* Background Image */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt="Page banner background"
            width={1600}
            height={800}
            layout="responsive"
            sizes="100vw"
            priority
            // placeholder="blur"
            // blurDataURL="/images/blur-placeholder.jpg" // Optional custom blur image
            className="md:object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
      )}

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          {title && (
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg mt-3 font-medium text-white/90 tracking-wide">
              {subtitle}
            </p>
          )}
          {buttonText && buttonLink && (
            <Link
              href={buttonLink}
              className={`inline-block mt-6 px-6 py-3 rounded-md font-semibold transition duration-200 text-sm sm:text-base ${
                backgroundImage
                  ? "bg-primary text-black hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-gray-200"
              }`}
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
