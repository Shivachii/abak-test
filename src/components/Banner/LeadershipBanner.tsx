import Image from "next/image";

interface BannerProps {
  leaderName: string;
  backgroundImage: string;
  height?: string; // e.g., h-[400px]
}

export default function LeaderBanner({
  leaderName,
  backgroundImage,
  height = "h-[400px]",
}: BannerProps) {
  return (
    <section className={`relative w-full ${height}`}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Leaders Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
          {leaderName}
        </h1>
      </div>
    </section>
  );
}
