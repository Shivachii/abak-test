"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

interface MediaItem {
  _key: string;
  type: string;
  url: string;
  caption?: string;
}

export default function EventCarousel({
  mediaItems,
}: {
  mediaItems: MediaItem[];
}) {
  if (!mediaItems || mediaItems.length === 0) return null;

  return (
    <div className="custom-swiper relative mt-12">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-10"
      >
        {mediaItems.map((item) => (
          <SwiperSlide key={item._key}>
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={item.caption || "Event media"}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-64"
              />
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg text-sm"
              >
                📎 {item.caption || "Download file"}
              </a>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
