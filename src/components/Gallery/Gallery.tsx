"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

interface MediaItem {
  _key: string;
  type: "image" | "file";
  url: string;
  caption?: string;
}

interface Gallery extends SanityDocument {
  title: string;
  description?: string;
  mediaItems?: MediaItem[];
}

export default function GalleryViewer({ gallery }: { gallery: Gallery }) {
  if (!gallery) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-red-600">
          Gallery not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8 space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">{gallery.title}</h2>
        {gallery.description && (
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            {gallery.description}
          </p>
        )}
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {(gallery.mediaItems ?? []).length > 0 ? (
          (gallery.mediaItems ?? []).map((media) => (
            <div
              key={media._key}
              className="border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              {media.type === "image" && media.url && (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={media.url}
                    alt={media.caption || gallery.title}
                    fill
                    className="object-cover rounded-t-2xl"
                    priority
                  />
                </div>
              )}

              {media.type === "file" && media.url && (
                <div className="p-4">
                  <p className="font-medium text-sm text-gray-700">Document:</p>
                  <Link
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline text-sm"
                  >
                    View file
                  </Link>
                </div>
              )}

              {media.caption && media.type === "image" && (
                <div className="p-3 border-t text-sm text-gray-500">
                  {media.caption}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No media available.
          </p>
        )}
      </div>
    </div>
  );
}
