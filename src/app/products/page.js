import FilterProducts from "@/components/products/Filter";
import Link from "next/link";
import ProductCard from "@/components/products/Card";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { getAllProducts } from "@/api/products";

async function ProductsPage({ searchParams }) {
  const products = await getAllProducts(await searchParams);

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-5">
        <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-textColor px-2 dark:text-white">
          Featured Products
        </h1>
        <div className="flex items-center py-3">
          <FilterProducts />
          <Link
            href={`${PRODUCTS_ROUTE}/add`}
            className="bg-gray-200 px-5 py-2 rounded"
          >
            Add Product
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 px-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
