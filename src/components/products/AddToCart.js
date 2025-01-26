"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";

function AddProductToCart({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(addToCart({ id: product.id, price: product.price }))
      }
      className="text-white bg-primary-600 px-10 py-3 flex items-center md:text-xl dark:text-white"
    >
      Add to cart
      <MdOutlineShoppingCart className="ml-2" />
    </button>
  );
}

export default AddProductToCart;
