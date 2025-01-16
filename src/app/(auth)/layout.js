import Image from "next/image";
import ecommerce from "@/assets/images/ecommerce.png";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-8 min-h-svh">
        <div className="bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-between p-10 md:p-20 m-5 lg:m-10">
          <div className="w-1/2 mr-10 p-5 hidden md:block">
            <Image
              src={ecommerce}
              alt="Auth image"
              height={300}
              width={500}
              className="w-full"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
