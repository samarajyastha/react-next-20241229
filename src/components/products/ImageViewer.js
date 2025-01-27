"use client";

import Image from "next/image";
import { useState } from "react";
import placeholder from "@/assets/images/placeholder.jpeg";
import { RxCross2 } from "react-icons/rx";

function ZoomImage({ url, zoom = false, setZoom }) {
  return (
    <div className={zoom ? "block" : "hidden"}>
      <div className="fixed left-0 top-0 min-h-svh w-full bg-opacity-50 bg-black z-50 p-10">
        <button
          className="float-right text-white"
          onClick={() => setZoom(false)}
        >
          <RxCross2 className="h-7 w-7" />
        </button>
        <div className="flex items-center justify-center min-h-[90vh]">
          <Image
            src={url}
            alt="Product details img"
            width={1000}
            height={1000}
            className="w-auto max-h-screen"
          />
        </div>
      </div>
    </div>
  );
}

function ProductImageViewer({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  if (product.imageUrls.length == 0)
    return (
      <Image
        alt="product image"
        src={placeholder}
        width={500}
        height={500}
        className="h-40 w-auto mx-auto"
      />
    );

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr,auto] gap-10">
      <ZoomImage
        url={product.imageUrls[currentImageIndex]}
        zoom={zoom}
        setZoom={setZoom}
      />
      <Image
        src={product.imageUrls[currentImageIndex]}
        alt="Product details img"
        width={500}
        height={500}
        className="h-auto w-auto"
        onClick={() => setZoom(true)}
      />

      <div className="flex">
        {product.imageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt="Product details img"
            width={40}
            height={40}
            className={`${
              currentImageIndex === index ? "bg-blue-100" : "bg-white"
            } h-auto w-auto p-2 m-2 border rounded`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImageViewer;
