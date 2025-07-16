"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { urlFor } from "../../../sanity/lib/image";

interface Gallery {
  title: string;
  slug: {
    current: string;
  };
  media?: MediaItemRaw[];
}

interface MediaItemRaw {
  url: string;
  type: "image" | "file";
  extension?: string;
  caption?: string;
}

interface MediaItem extends MediaItemRaw {
  galleryTitle: string;
  gallerySlug: string;
}

export default function AllGalleryMedia({
  galleries,
}: {
  galleries: Gallery[];
}) {
  const allItems: MediaItem[] = galleries.flatMap((gallery) =>
    (gallery.media || []).map((item) => ({
      ...item,
      galleryTitle: gallery.title,
      gallerySlug: gallery.slug.current,
    }))
  );

  console.log("All Gallery Media Items:", allItems);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentPage]);

  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const paginatedItems = allItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-secondary">
        Our Image Gallery
      </h1>
      <p className="text-lg mb-8 text-justify mt-4 text-gray-600 max-w-2xl mx-auto">
        Welcome to our Image Gallery – a curated collection of powerful
        photographs capturing the spirit of our events, community initiatives,
        and milestones. Explore these visuals for an inspiring glimpse into our
        journey and impact.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? [...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="rounded overflow-hidden shadow bg-white animate-pulse"
              >
                <div className="h-48 bg-gray-200 animate-pulse" />
              </div>
            ))
          : paginatedItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded overflow-hidden shadow bg-white"
              >
                <div className="relative w-full h-60 aspect-video bg-gray-100">
                  {item.type === "image" ? (
                    <Image
                      src={item.url}
                      alt={item.caption || "Gallery image"}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover rounded transition-opacity duration-300 ease-in-out"
                    />
                  ) : item.extension?.includes("mp4") ? (
                    <video
                      controls
                      className="w-full h-full object-cover rounded"
                    >
                      <source src={item.url} type="video/mp4" />
                    </video>
                  ) : (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-full bg-gray-100"
                    >
                      <span className="text-blue-600 underline">Open File</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center mt-8 gap-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
