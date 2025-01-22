import Image from "next/image";

import teslaCar from "@/assets/images/tesla.jpg";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { MdOutlineCategory, MdOutlineEdit } from "react-icons/md";

function ProductCard({ product }) {
  return (
    <div className="bg-gray-50 p-5 rounded-xl shadow max-w-fit dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950">
      <Link href={`${PRODUCTS_ROUTE}/${product.id}`}>
        <Image
          alt={product.name}
          src={product.imageUrls.length > 0 ? product.imageUrls[0] : teslaCar}
          width={500}
          height={500}
          className="h-40 w-auto mx-auto"
        />
      </Link>
      <div className="py-3">
        <Link href={`${PRODUCTS_ROUTE}/brand/${product.brand}`}>
          <span className="inline-flex items-center rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">
            {product.brand}
          </span>
        </Link>

        <Link href={`${PRODUCTS_ROUTE}/category/${product.category}`}>
          <span className="ml-2 inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-500/10">
            <MdOutlineCategory className="mr-1" />
            {product.category}
          </span>
        </Link>

        <div className="flex items-center justify-start">
          <h2 className="text-xl font-semibold py-1 capitalize dark:text-white hover:underline">
            <Link href={`${PRODUCTS_ROUTE}/${product.id}`}>{product.name}</Link>
          </h2>
          <Link
            href={`${PRODUCTS_ROUTE}/edit/${product.id}`}
            className="ml-2 p-1 hover:text-blue-600 dark:text-white hover:dark:text-gray-200"
          >
            <MdOutlineEdit />
          </Link>
        </div>
        <p className="text-sm text-zinc-600 dark:text-gray-300 max-h-10 overflow-hidden text-ellipsis">
          {product.description}
        </p>
        <p className="mt-1">
          <span className="text-xl text-slate-600 pr-1">$</span>
          <span className="dark:text-white">{product.price}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
