import Image from "next/image";
import Link from "next/link";
import s24 from "@/assets/images/s24.png";
import { PRODUCTS_ROUTE } from "@/constants/routes";

function HomeFeaturedProduct() {
  return (
    <div className="py-10 bg-slate-100 dark:bg-slate-700">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 px-6 md:px-16 lg:p-0 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start justify-center dark:text-white">
          <span className="bg-blue-200 text-blue-800 px-4 rounded-xl ml-2">
            Featured Product
          </span>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white my-2">
            Samsung Galaxy S24 Ultra
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere,
            harum quasi iusto sint error sunt hic quae quia reiciendis?
          </p>
          <p className="py-2">
            Incidunt vel consequuntur modi, dignissimos a ea sequi ducimus dicta
            quis mollitia tenetur ad atque! Delectus itaque quaerat odit
            impedit?
          </p>
          <h4 className="text-2xl md:text-3xl font-bold text-orange-500 my-3">
            <span className="text-3xl md:text-4xl">$</span>
            1299
          </h4>

          <Link
            href={PRODUCTS_ROUTE + "/678fad39fd4fff6eb2e21d7a"}
            className="py-2 px-6 bg-primary-500 text-white font-semibold"
          >
            Buy Now
          </Link>
        </div>
        <Image
          src={s24}
          alt="image"
          height={800}
          width={800}
          className="max-h-[50vh] w-auto md:max-h-full"
        />
      </div>
    </div>
  );
}

export default HomeFeaturedProduct;
