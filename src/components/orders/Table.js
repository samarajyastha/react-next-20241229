import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { getOrders } from "@/api/orders";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import EditOrderStatus from "./EditStatus";

function OrdersTable() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((data) => setOrders(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner className="h-16 w-16" />
      </div>
    );

  return (
    <table className="my-8 border dark:text-white w-full">
      <thead>
        <tr>
          <th className="py-2 px-4 border border-slate-400">Order ID</th>
          <th className="py-2 px-4 border border-slate-400">User ID</th>
          <th className="py-2 px-4 border border-slate-400">Products</th>
          <th className="py-2 px-4 border border-slate-400">Is Paid</th>
          <th className="py-2 px-4 border border-slate-400">Is Delivered</th>
          <th className="py-2 px-4 border border-slate-400">Status</th>
          <th className="py-2 px-4 border border-slate-400">
            <HiOutlineCog6Tooth className="w-full text-center" />
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className="text-xs px-3 border border-slate-400">{order.id}</td>
            <td className="text-xs text-blue-600 px-3 border border-slate-400">
              {order.userId}
            </td>
            <td className="py-2 px-3 border border-slate-400">
              {order.orderItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={`${PRODUCTS_ROUTE}/${item.product.id}`}
                    className="hover:underline"
                  >
                    {item.product.name}
                    <span className="text-xs ml-2">x {item.quantity}</span>
                  </Link>
                </div>
              ))}
            </td>
            <td className="px-3 border border-slate-400 text-center">
              <span
                className={`${
                  order.isPaid
                    ? "bg-green-100 text-green-600 "
                    : "bg-red-100 text-red-600 "
                } inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ring-primary-500/10`}
              >
                {order.isPaid ? "Yes" : "No"}
              </span>
            </td>
            <td className="px-3 border border-slate-400 text-center">
              <span
                className={`${
                  order.isDelivered
                    ? "bg-green-100 text-green-600 "
                    : "bg-red-100 text-red-600 "
                } inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ring-primary-500/10`}
              >
                {order.isDelivered ? "Yes" : "No"}
              </span>
            </td>
            <td className="px-3 text-sm border border-slate-400 text-center">
              <span
                className={`bg-primary-100 text-primary-600 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ring-primary-500/10`}
              >
                {order.status}
              </span>
            </td>
            <td className="px-3 text-sm border border-slate-400 text-center">
              <EditOrderStatus />
              <button className="h-7 w-6 bg-red-600 p-1 rounded text-white mx-1">
                <BsTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
