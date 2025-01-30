import { ORDER_PENDING } from "@/constants/orderStatus";
import Image from "next/image";
import ConfirmOrder from "./Confirm";

function OrdersCard({ order, status }) {
  return (
    <div className="border rounded-2xl my-5 bg-gray-50 dark:bg-gray-700">
      <div className="flex items-center justify-between m-6">
        <div>
          <p className="text-gray-700 dark:text-gray-200 text-sm">OrderId</p>
          <h5 className="font-semibold dark:text-white">#{order.id}</h5>
        </div>
        <span className="inline-flex items-center rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">
          {order.status}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-6">
        {order.orderItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[auto,1fr] gap-5 py-3 px-5 rounded-xl border dark:text-white"
          >
            <Image
              src={item.product.imageUrls[0]}
              alt={item.product.name}
              height={100}
              width={100}
              className="h-24 w-auto"
            />
            <div>
              <h5 className="font-semibold text-xl">{item.product.name}</h5>
              <p className="text-sm">
                Brand:
                <span className="font-semibold ml-2">{item.product.brand}</span>
              </p>
              <p className="text-sm">${Math.floor(item.product.price * 0.9)}</p>
              <p>x {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-200 dark:bg-slate-800 dark:text-white rounded-b-2xl py-3 px-5 flex justify-between items-center">
        <p>
          Total price:
          <span className="font-semibold ml-2">${order.totalPrice}</span>
        </p>
        <div className={status == ORDER_PENDING ? "block" : "hidden"}>
          <ConfirmOrder order={order} />
        </div>
      </div>
    </div>
  );
}

export default OrdersCard;
