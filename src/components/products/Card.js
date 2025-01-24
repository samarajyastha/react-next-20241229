"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";
import placeholder from "@/assets/images/placeholder.jpeg";
import { MdDelete, MdOutlineCategory, MdOutlineEdit } from "react-icons/md";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { toast, ToastContainer } from "react-toastify";
import { deleteProduct } from "@/api/products";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PRODUCT_GRID_VIEW } from "@/constants/productView";

function ProductCard({ product, productView }) {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  function removeProduct() {
    setShowDeletePopup(true);
  }

  async function confirmDeleteProduct() {
    try {
      await deleteProduct(product.id);

      toast.success(`${product.name} deleted successfully.`, {
        autoClose: 1500,
      });

      router.refresh();
    } catch (error) {
      toast.error(error.response.data ?? "", {
        autoClose: 1500,
      });
    } finally {
      setShowDeletePopup(false);
    }
  }

  const className =
    productView === PRODUCT_GRID_VIEW
      ? "bg-gray-50 p-5 rounded-xl shadow dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950"
      : "grid grid-cols-1 sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr,2fr] gap-x-20 bg-gray-50 p-5 sm:p-10 rounded-xl shadow dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950";

  return (
    <div className={className}>
      <Link href={`${PRODUCTS_ROUTE}/${product.id}`}>
        <Image
          alt={product.name}
          src={
            product.imageUrls.length > 0 ? product.imageUrls[0] : placeholder
          }
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
          {user?.roles.includes("ADMIN") && (
            <button
              onClick={removeProduct}
              className="ml-2 p-1 text-red-500 hover:text-red-700 dark:text-white hover:dark:text-gray-200"
            >
              <MdDelete />
            </button>
          )}
        </div>
        <p className="text-sm text-zinc-600 dark:text-gray-300 max-h-10 overflow-hidden text-ellipsis">
          {product.description}
        </p>
        <p className="mt-1">
          <span className="text-xl text-slate-600 pr-1">$</span>
          <span className="dark:text-white">{product.price}</span>
        </p>
      </div>

      <Modal
        title={"Delete product"}
        show={showDeletePopup}
        setShow={setShowDeletePopup}
      >
        <p className="py-5">
          Are you sure you want to delete <b>{product.name}</b>?
        </p>

        <div className="flex items-center justify-between pt-2">
          <button
            className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
            onClick={() => setShowDeletePopup(false)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-primary-500 hover:bg-primary-700 text-white rounded"
            onClick={confirmDeleteProduct}
          >
            Delete
          </button>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default ProductCard;
