"use client";

import apache from "@/assets/images/apache.png";
import s24 from "@/assets/images/s24.png";
import acer from "@/assets/images/acer.png";
import car from "@/assets/images/car.png";
import skincare from "@/assets/images/skincare.png";
import electronics from "@/assets/images/electronics.png";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/routes";

const categories = [
  {
    title: "Smartphones",
    image: s24,
  },
  {
    title: "Laptop",
    image: acer,
  },
  {
    title: "Electronics",
    image: electronics,
  },
  {
    title: "Bikes",
    image: apache,
  },
  {
    title: "Cars",
    image: car,
  },
  {
    title: "Skincare",
    image: skincare,
  },
];

function HomeCategories() {
  return (
    <div className="pt-6 pb-14 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-4xl text-center font-semibold mb-8 dark:text-white">
        Popular categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {categories.map((category, index) => (
          <Link
            href={`${PRODUCTS_ROUTE}/category/${category.title}`}
            className="flex flex-col items-center justify-center relative"
            key={index}
          >
            <Image
              src={category.image}
              alt="category"
              height={200}
              width={200}
              className="px-5 py-2 bg-primary-100 hover:bg-primary-300 rounded-xl"
            />
            <h3 className="absolute bottom-1 font-semibold text-gray-800">
              {category.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeCategories;
