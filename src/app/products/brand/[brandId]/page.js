import { getProductsByBrand } from "@/api/products";
import ProductCard from "@/components/products/Card";

async function ProductsByBrand({ params }) {
  const brand = (await params).brandId;

  const products = await getProductsByBrand(brand);

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-5">
        <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-textColor px-2 dark:text-white">
          Brand: {brand}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 px-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsByBrand;
