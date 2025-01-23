import FilterProducts from "@/components/products/Filter";
import Link from "next/link";
import ProductCard from "@/components/products/Card";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { getAllProducts, getBrands, getCategories } from "@/api/products";
import SearchProducts from "@/components/products/Search";

async function ProductsPage({ searchParams }) {
  const products = await getAllProducts(await searchParams);
  const brands = await getBrands();
  const categories = await getCategories();

  return (
    <div className="py-8">
      <div className="flex items-center justify-between px-5">
        <h1 className="text-center md:text-left text-2xl md:text-4xl font-semibold text-textColor dark:text-white">
          Featured Products
        </h1>
        <div className="flex items-center py-3">
          <Link
            href={`${PRODUCTS_ROUTE}/add`}
            className="bg-gray-200 px-5 py-2 rounded"
          >
            Add Product
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-[1fr,auto] gap-5 items-center justify-between p-5">
        <SearchProducts />
        <FilterProducts brands={brands} categories={categories} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
