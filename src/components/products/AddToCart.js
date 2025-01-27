"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function AddToCart({ product }) {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(
      addToCart({ id: product.id, name: product.name, price: product.price })
    );

    toast.success(`${product.name} added to cart successfully.`, {
      autoClose: 1500,
    });
  }

  return (
    <button
      onClick={addProductToCart}
      className="text-white bg-primary-600 px-10 py-3 flex items-center md:text-xl dark:text-white"
    >
      Add to cart
      <MdOutlineShoppingCart className="ml-2" />
      <ToastContainer />
    </button>
  );
}

export default AddToCart;
