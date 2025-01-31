"use client";

import Image from "next/image";
import Link from "next/link";
import RemoveFromCart from "@/components/products/RemoveFromCart";
import { IoCog } from "react-icons/io5";
import { LuCircleMinus, LuCirclePlus } from "react-icons/lu";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { decreaseQuantity, increaseQuantity } from "@/redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProducts from "@/components/products/Checkout";

function ProductsCart() {
  const { products, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="py-8 px-2 sm:p-10">
      <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-textColor dark:text-white">
        Your cart ({products.length} items)
      </h2>

      <div className="py-10">
        <table className="w-full dark:text-white">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-sm text-left">S.N</th>
              <th colSpan={2} className="p-2 text-sm text-left">
                Product Name
              </th>
              <th className="p-2 text-sm text-center">Price</th>
              <th className="p-2 text-sm text-center">Quantity</th>
              <th className="p-2 text-sm text-right">Total</th>
              <th className="p-2 text-lg text-center">
                <IoCog className="inline-block" />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{index + 1}.</td>
                <td className="p-2" colSpan={2}>
                  <div className="flex items-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      height={40}
                      width={40}
                    />
                    <Link
                      href={`${PRODUCTS_ROUTE}/${product.id}`}
                      className="ml-3 font-semibold text-primary-500 hover:underline capitalize dark:text-primary-200"
                    >
                      {product.name}
                    </Link>
                  </div>
                </td>
                <td className="p-2 text-center">{product.price}</td>
                <td className="p-2 text-center">
                  <div className="flex items-center justify-center">
                    <button
                      className="px-2 h-4 disabled:text-gray-500"
                      onClick={() => dispatch(decreaseQuantity(product))}
                      disabled={product.quantity <= 1}
                    >
                      <LuCircleMinus />
                    </button>
                    <span className="text-lg">{product.quantity}</span>
                    <button
                      className="px-2 h-4 disabled:text-gray-500"
                      onClick={() => dispatch(increaseQuantity(product))}
                      disabled={product.quantity >= 5}
                    >
                      <LuCirclePlus />
                    </button>
                  </div>
                </td>
                <td className="p-2 text-right">
                  {product.price * product.quantity}
                </td>
                <td className="p-2 text-center">
                  <RemoveFromCart product={product} />
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan={6}>
                <div className="h-8">
                  {products.length == 0 && (
                    <div className="text-center">Cart is empty</div>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <td className="font-semibold text-sm text-right">Sub total:</td>
              <td className="text-right">${totalPrice}</td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <td className="font-semibold text-sm text-right">Discount:</td>
              <td className="text-right">${Math.floor(totalPrice * 0.1)}</td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <td className="font-semibold text-sm text-right">Grand total:</td>
              <td className="text-right">${Math.floor(totalPrice * 0.9)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CheckoutProducts disabled={products.length === 0} />
    </div>
  );
}

export default ProductsCart;
