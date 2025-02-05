import { getProductsByCategory } from "@/api/products";
import ProductList from "./List";

async function RelatedProducts({ category }) {
  const products = await getProductsByCategory(category);
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-between px-5">
        <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-textColor px-2 dark:text-white">
          Related Products
        </h1>
      </div>
      <ProductList products={products} />
    </div>
  );
}

export default RelatedProducts;
