import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allGalleriesQuery } from "../../../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../../../sanity/lib/live";
import { ArrowRight } from "lucide-react";

export default async function ImagesPage() {
  const galleries = await sanityFetch({ query: allGalleriesQuery });

  if (!galleries || !galleries.data || galleries.data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-red-500">No galleries found</h1>
      </div>
    );
  }
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-secondary">
        Our Image Galleries
      </h1>
      <p className="text-lg mb-8 text-justify mt-4 text-gray-600 max-w-2xl mx-auto">
        Welcome to our Image Gallery – a curated collection of powerful
        photographs capturing the spirit of our events, community initiatives,
        and milestones. Explore these visuals for an inspiring glimpse into our
        journey and impact.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {galleries.data.map((gallery) => (
          <Link
            key={gallery._id}
            href={`/resources/audio-visual/images/${gallery.slug.current}`}
            className="group block rounded-2xl overflow-hidden shadow-sm border bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-52 sm:h-60 lg:h-64 overflow-hidden">
              {gallery.previewImage ? (
                <Image
                  src={gallery.previewImage}
                  alt={gallery.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-sm text-gray-400">
                  No preview
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-200">
                {gallery.title}
              </h2>
              <ArrowRight
                size={20}
                className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
