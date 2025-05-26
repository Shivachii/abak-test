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
    image: "/mosqueteachings.jpeg",
    ctaLink: "/about",
  },
  {
    image: "/hawza.jpg",
    ctaLink: "/islamic-learning/hawza-seyyidah",
  },
  {
    image: "/mashallah.jpg",
    ctaLink: "/programs",
  },
];

export default function HeroCarousel() {
  const t = useTranslations("hero");

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
                alt={t(`slides.${index}.title`)}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="brightness-[0.4] object-cover object-center"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-center max-w-3xl px-4 md:mx-2 text-white gap-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  {t("heading")}
                </h1>
                <span className="h-0.5 w-[310px] md:w-[620px] bg-primary" />
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold my-2 md:my-4">
                  {t(`slides.${index}.title`)}
                </h2>
                <p className="text-base md:text-lg lg:text-xl">
                  {t(`slides.${index}.description`)}
                </p>
                <div className="flex gap-4 items-center">
                  {slide.ctaLink && (
                    <Link
                      href={slide.ctaLink}
                      className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold  md:px-6 md:py-3 rounded-sm shadow-lg transition-all duration-300"
                    >
                      {t(`slides.${index}.ctaText`)}
                    </Link>
                  )}
                  <Link
                    href="/donate"
                    className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold hidden md:block p-3 md:px-6 md:py-3 rounded-sm shadow-lg transition-all duration-300"
                  >
                    {t("donate")}
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
