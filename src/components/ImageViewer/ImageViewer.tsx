"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface Props {
  images: ImageItem[];
  perPage?: number;
}

export default function ImageGallery({ images, perPage = 6 }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const validImages = Array.isArray(images) ? images : [];
  const totalPages = Math.ceil(validImages.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedImages = validImages.slice(start, start + perPage);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedImages.map((img) => (
          <div
            key={img._id}
            className="rounded overflow-hidden shadow-lg bg-white"
          >
            <div className="relative h-60 w-full">
              <Image
                src={img.imageUrl}
                alt={img.title}
                fill
                className="object-cover rounded-t"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {img.title}
              </h3>
              {img.description && (
                <p className="text-sm text-gray-600 mt-1">{img.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
