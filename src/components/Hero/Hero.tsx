"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/mosqueteachings.jpeg",
    title:
      "Guided by the Teachings of the Prophet (s.a.w.w) and Ahlul Bayt (a.s)",
    description:
      "ABAK is committed to spreading authentic Islamic knowledge and values throughout Kenya.",
    ctaText: "Learn about ABAK",
    ctaLink: "/about",
  },
  {
    image: "/hawza.jpg",
    title: "Sayyedah Zeinab",
    description:
      "Our Hawza Seminary shapes future Islamic scholars with deep spiritual, intellectual, and moral training to serve the Ummah with wisdom and sincerity.",
    ctaText: "Learn about our Sayyedah Zeinab",
    ctaLink: "/islamic-learning/hawza-seyyidah",
  },

  {
    image: "/mashallah.jpg",
    title: "From Education to Social Welfare",
    description:
      "ABAK supports Shia communities with learning institutions, content, and vital services.",
    ctaText: "See Our Community Work",
    ctaLink: "/programs",
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] xl:h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
        style={
          {
            "--swiper-pagination-color": "#fbbf24",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-inactive-scale": "0.8",
          } as React.CSSProperties
        }
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="brightness-[0.4] object-cover object-center "
                priority
              />
              <div className="absolute inset-0 flex flex-col  justify-center max-w-3xl px-4 md:mx-2 text-white gap-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  The Ahlul-Bayt Assembly of Kenya
                </h1>
                <span className="h-0.5 w-[310px] md:w-[620px] bg-primary" />
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold my-2 md:my-4">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl">
                  {slide.description}
                </p>
                <div className="flex gap-4 items-center">
                  {slide.ctaLink && (
                    <Link
                      href={slide.ctaLink}
                      className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold hidden md:block md:px-6 md:py-3 rounded-sm shadow-lg transition-all duration-300"
                    >
                      {slide.ctaText}
                    </Link>
                  )}
                  <Link
                    href="/donate"
                    className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold p-3 md:px-6 md:py-3 rounded-sm shadow-lg transition-all duration-300"
                  >
                    Help us make a difference
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
