"use client";

import { addProduct, editProduct } from "@/api/products";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function ProductForm({ isEditing = false, product }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: product,
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function submitForm(data) {
    setLoading(true);

    try {
      // if (isEditing) {
      //   await editProduct(product._id, data);
      // } else {
      //   await addProduct(data);
      // }

      isEditing ? await editProduct(product._id, data) : await addProduct(data);

      toast.success(
        isEditing
          ? "Product updated successfully."
          : "Product added successfully.",
        {
          autoClose: 1500,
          onClose: () => router.replace(PRODUCTS_ROUTE),
        }
      );
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full lg:w-2/3 xl:w-1/2 px-10 py-8  md:px-16 md:py-12 shadow-xl rounded-2xl dark:bg-gray-700"
    >
      <div className="py-2">
        <label
          htmlFor="name"
          className="font-semibold text-sm uppercase p-1 dark:text-white"
        >
          Product name
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
          {...register("name", {
            required: "Product name is required.",
          })}
        />
        <p className="text-red-600 text-sm m-1">{errors.name?.message}</p>
      </div>
      <div className="py-2">
        <label
          htmlFor="brand"
          className="font-semibold text-sm uppercase p-1 dark:text-white"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
          {...register("brand")}
        />
      </div>
      <div className="py-2">
        <label
          htmlFor="category"
          className="font-semibold text-sm uppercase p-1 dark:text-white"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
          {...register("category")}
        />
      </div>
      <div className="py-2">
        <label
          htmlFor="price"
          className="font-semibold text-sm uppercase p-1 dark:text-white"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
          {...register("price", {
            required: "Price is required.",
            min: {
              value: 0,
              message: "Product price must be positive value.",
            },
          })}
        />
        <p className="text-red-600 text-sm m-1">{errors.price?.message}</p>
      </div>
      <div className="flex justify-center pt-5">
        <input
          type="submit"
          value={
            loading
              ? "Submitting..."
              : isEditing
              ? "Edit Product"
              : "Add Product +"
          }
          disabled={loading}
          className="bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed"
        />
      </div>
      <ToastContainer />
    </form>
  );
}

export default ProductForm;
