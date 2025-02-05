"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import ipad from "@/assets/images/ipad.png";
import apache from "@/assets/images/apache.png";
import s24 from "@/assets/images/s24.png";
import acer from "@/assets/images/acer.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  {
    title: "Ipad Pro",
    price: 999,
    brand: "Apple",
    image: ipad,
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    price: 1299,
    brand: "Samsung",
    image: s24,
  },
  {
    title: "Acer Predator Helios",
    price: 2599,
    brand: "Acer",
    image: acer,
  },
  {
    title: "Apache RTR 160 4V",
    price: 5999,
    brand: "TVS",
    image: apache,
  },
];

function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-10 md:px-16 lg:p-0">
              <Image
                src={slide.image}
                alt="image"
                height={500}
                width={500}
                className="max-h-[50vh] w-auto md:max-h-full"
              />
              <div className="flex flex-col items-start justify-center">
                <span className="bg-slate-200 text-slate-800 px-4 rounded-xl ml-2">
                  {slide.brand}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold dark:text-white">
                  {slide.title}
                </h1>
                <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold text-orange-500 my-5">
                  <span className="text-3xl md:text-4xl lg:text-6xl">$</span>
                  {slide.price}
                </h4>
                <Link
                  href={PRODUCTS_ROUTE}
                  className="py-2 px-6 bg-primary-500 text-white font-semibold"
                >
                  Shop More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
