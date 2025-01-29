"use client";

import { getOrders } from "@/api/orders";
import OrdersCard from "@/components/orders/Card";
import OrdersLoadingCard from "@/components/orders/LoadingCard";
import {
  ORDER_CONFIRMED,
  ORDER_DELIVERED,
  ORDER_PENDING,
  ORDER_SHIPPED,
} from "@/constants/orderStatus";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setLoading(true);
    getOrders(status)
      .then((data) => setOrders(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [status]);

  return (
    <div className="py-8 px-2 sm:p-10">
      <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-textColor dark:text-white">
        Your orders
      </h2>

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
