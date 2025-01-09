import { getAllProducts } from "@/api/products";
import ProductCard from "@/components/products/Card";

async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-8">
        <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-textColor px-2 dark:text-white">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 px-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
