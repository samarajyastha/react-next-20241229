import { getProductById } from "@/api/products";
import {
  MdOutlineStarPurple500,
  MdStarHalf,
  MdArrowBack,
} from "react-icons/md";

import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import ProductImageViewer from "@/components/products/ImageViewer";
import AddToCart from "@/components/products/AddToCart";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductDescription from "@/components/products/Description";

async function ProductById({ params }) {
  const id = (await params).productId;

  const product = await getProductById(id);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around min-h-[90svh]">
        <div className="relative w-full lg:w-1/2 p-10 md:p-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="pb-3">
            <Link
              href={PRODUCTS_ROUTE}
              className="flex items-center dark:text-gray-100 hover:underline lg:hidden absolute  top-5 left-5 sm:top-10 sm:left-10"
            >
              <MdArrowBack className="mr-2" /> Go Back
            </Link>
          </div>
          <ProductImageViewer product={product} />
        </div>

        <div className="w-full bg-white dark:bg-gray-700 lg:w-1/2  px-10 py-16 md:px-20">
          <Link
            href={PRODUCTS_ROUTE}
            className="hidden items-center dark:text-gray-100 hover:underline lg:flex"
          >
            <MdArrowBack className="mr-2" /> Go Back
          </Link>
          {/* Category  */}
          <p className="font-bold uppercase text-gray-600 dark:text-gray-300 ml-1 mt-5">
            {product.category}
          </p>

          {/* Title  */}
          <h1 className="text-3xl md:text-4xl font-semibold text-textColor dark:text-white my-1">
            {product.name}
          </h1>

          {/* Brand  */}
          <span className="ml-1 inline-flex items-center rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">
            {product.brand}
          </span>

          {/* Ratings  */}
          <div className="flex pt-6 pb-3 text-yellow-500 md:text-2xl items-center">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdStarHalf />

            <span className="text-gray-600 text-xs md:text-sm ml-3 font-semibold dark:text-gray-300 ">
              4.5 (329 reviews)
            </span>
          </div>

          {/* Price  */}
          <div>
            <span className="text-xl md:text-2xl text-slate-800 dark:text-white">
              $
            </span>
            <span className="dark:text-white text-xl md:text-2xl">
              {Math.floor(product.price * 0.9)}
            </span>

            <span className=" dark:text-gray-300 text-slate-500 ml-3">$</span>
            <span className="dark:text-gray-300 text-slate-500 line-through">
              {product.price}
            </span>
          </div>

          {/* Description  */}
          <div className="py-8">
            <div className="border-b-gray-400 border-b">
              <h3 className="w-full text-xl font-semibold text-gray-800 dark:text-gray-100">
                Description
              </h3>
            </div>

            <p className="mt-5 dark:text-white">
              <ProductDescription description={product.description} />
            </p>

            <ul className="mt-3 px-6 list-disc dark:text-gray-100">
              <li>Features: High quality material</li>
              <li>Delivery: On time</li>
              <li>Product is as shown in the image</li>
              <li>Delivery all over Nepal.</li>
            </ul>
          </div>

          {/* Add to cart  */}

          <AddToCart product={product} />
        </div>
      </div>
      <RelatedProducts category={product.category} />
    </>
  );
}

export default ProductById;
