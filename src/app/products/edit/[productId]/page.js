import { getProductById } from "@/api/products";
import ProductForm from "@/components/products/Form";
import EditProductLoading from "./loading";

async function EditProduct({ params }) {
  const id = (await params).productId;

  const product = await getProductById(id);

  return (
    <div className="flex items-center flex-col p-10 lg:p-0">
      <h2 className="text-3xl font-semibold dark:text-white text-textColor mb-8">
        Edit Product Page
      </h2>
      <ProductForm isEditing={true} product={product} />
    </div>
  );
}

export default EditProduct;
