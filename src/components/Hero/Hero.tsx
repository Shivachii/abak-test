"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const slides = [
  {
    image: "/about.jpg",
    ctaLink: "/about",
  },
  {
    image: "/banners/hawzahero.png",
    ctaLink: "/islamic-learning/hawza-seyyidah",
  },
  {
    image: "/hawza/img197.jpg",
    ctaLink: "/programs",
  },
];

export default function HeroCarousel() {
  const t = useTranslations("hero");

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
        style={
          {
            "--swiper-pagination-color": "#fbbf29",
            "--swiper-pagination-bullet-inactive-color": "#fbbf24",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-inactive-scale": "0.8",
          } as React.CSSProperties
        }
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col md:flex-row-reverse items-center md:items-stretch gap-6 w-full min-h-[70vh] p-4 md:p-10">
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto h-full">
                <Image
                  src={slide.image}
                  alt={t(`slides.${index}.title`)}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-center rounded-lg brightness-[0.8] shadow-md"
                  priority
                />
              </div>

              {/* Text Content Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left px-2 md:px-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-800">
                  {t(`slides.${index}.heading`)}
                </h1>

                <div className="h-1 w-16 bg-secondary mx-auto md:mx-0 rounded-full" />

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  {t(`slides.${index}.title`)}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  {t(`slides.${index}.description`)}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                  {slide.ctaLink && (
                    <Link
                      href={slide.ctaLink}
                      className="bg-amber-400 hover:bg-amber-400/80 text-gray-900 font-semibold px-5 py-2 rounded-md shadow-md transition-transform hover:scale-105"
                    >
                      {t(`slides.${index}.ctaText`)}
                    </Link>
                  )}
                  {/* <Link
                    href="/donate"
                    className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-5 py-2 rounded-md shadow-md transition-transform hover:scale-105"
                  >
                    {t("donate")}
                  </Link> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
