"use client";

import { getOrdersByUser } from "@/api/orders";
import OrdersCard from "@/components/orders/Card";
import OrdersLoadingCard from "@/components/orders/LoadingCard";
import {
  ORDER_CONFIRMED,
  ORDER_DELIVERED,
  ORDER_PENDING,
  ORDER_SHIPPED,
} from "@/constants/orderStatus";
import {
  ALL_ORDERS_ROUTE,
  LOGIN_ROUTE,
  ORDERS_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const orderTabs = [
  {
    label: "Pending",
    status: ORDER_PENDING,
  },
  {
    label: "Confirmed",
    status: ORDER_CONFIRMED,
  },
  {
    label: "Shipped",
    status: ORDER_SHIPPED,
  },
  {
    label: "Delivered",
    status: ORDER_DELIVERED,
  },
];

function ProductOrders() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(ORDER_PENDING);
  const [orders, setOrders] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace(LOGIN_ROUTE);

    setLoading(true);

    getOrdersByUser(status, user?.id)
      .then((data) => setOrders(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, user]);

  return (
    <div className="py-8 px-2 sm:p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-textColor dark:text-white">
          Your orders
        </h2>
        {user?.roles.includes("ADMIN") && (
          <Link
            href={ALL_ORDERS_ROUTE}
            className="px-4 py-2 bg-slate-100 rounded shadow"
          >
            All Orders
          </Link>
        )}
      </div>

      <div className="flex justify-between items-around w-full my-5 border-b">
        {orderTabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              status == tab.status
                ? "border-b-2 border-b-primary-500 dark:border-b-gray-300"
                : ""
            } p-2 dark:text-white`}
            onClick={() => setStatus(tab.status)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading && (
        <>
          <OrdersLoadingCard />
          <OrdersLoadingCard />
          <OrdersLoadingCard />
        </>
      )}

      {orders.length === 0 && (
        <div className="text-center p-3 dark:text-white">No orders</div>
      )}

      {orders.map((order, index) => (
        <OrdersCard
          key={index}
          order={order}
          status={status}
          loading={loading}
        />
      ))}
    </div>
  );
}

export default ProductOrders;
