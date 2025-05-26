import Link from "next/link";

export default function GalleryListPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Audio Visual Galleries
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to our Audio Visual Galleries – a curated collection of
          images, videos, and audio showcasing our events, initiatives, and
          impact. Explore each section to discover how our community brings its
          vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          {
            title: " Images",
            desc: "Explore our photo gallery capturing key moments.",
            href: "/resources/audio-visual/images",
          },
          {
            title: "Videos",
            desc: "Watch lectures, events, and special programs.",
            href: "/resources/audio-visual/videos",
          },
          {
            title: "Audio",
            desc: "Listen to Islamic talks and recitations.",
            href: "/resources/audio-visual/audio",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 p-8 text-center border"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 mb-6">{item.desc}</p>
            <Link
              href={item.href}
              className="inline-block px-5 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
