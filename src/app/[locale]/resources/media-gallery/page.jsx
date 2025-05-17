import Image from "next/image";
import Link from "next/link";
import { allGalleriesQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../../sanity/lib/live";

import { ArrowRight } from "lucide-react";

export default async function GalleryListPage() {
  const galleries = await sanityFetch({ query: allGalleriesQuery });

  if (!galleries || !galleries.data || galleries.data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-red-500">No galleries found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Media Galleries
      </h1>
      <p className="text-lg mb-8 text-justify mt-4 text-gray-600 max-w-2xl mx-auto">
        Welcome to our Media Galleries – a curated collection of images, videos
        and documents showcasing our events, initiatives, and impact. Explore
        each gallery to get a visual glimpse into our work and community
        stories.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleries.data.map((gallery) => (
          <Link
            key={gallery._id}
            href={`/resources/media-gallery/${gallery.slug.current}`}
            className="group rounded-xl overflow-hidden border hover:shadow-md hover:text-primary transition-all bg-white"
          >
            <div className="relative w-full h-48 sm:h-52 lg:h-56">
              {gallery.previewImage ? (
                <Image
                  src={gallery.previewImage}
                  alt={gallery.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-sm text-gray-400">
                  No preview
                </div>
              )}
            </div>

            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold ">{gallery.title}</h2>
              <ArrowRight
                size={18}
                className="text-gray-500 group-hover:text-primary  group-hover:translate-x-1 transition-transform duration-200"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
