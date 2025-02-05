import { getProductsByBrand } from "@/api/products";
import ProductList from "@/components/products/List";

async function PopularBrand() {
  const products = await getProductsByBrand("Apple");

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between px-5">
        <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-textColor px-2 dark:text-white">
          Popular brand
        </h1>
      </div>

      <ProductList products={products} />
    </div>
  );
}

export default PopularBrand;
