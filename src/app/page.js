import Image from "next/image";
import ipad from "@/assets/images/ipad.jpg";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/routes";

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto min-h-svh py-5">
        <div className="grid grid-cols-2">
          <Image src={ipad} alt="image" height={500} width={500} />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-7xl font-bold">Ipad Pro</h1>
            <h4 className="text-5xl font-bold text-primary-500 my-5">$999</h4>
            <Link href={PRODUCTS_ROUTE} className="py-2 px-6 bg-primary-500 text-white font-semibold">
              Shop More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
