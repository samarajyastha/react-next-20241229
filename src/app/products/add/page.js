import ProductForm from "@/components/products/Form";

function AddProductPage() {
  return (
    <div className="flex items-center flex-col p-10 lg:p-0">
      <h2 className="text-3xl font-semibold dark:text-white text-textColor mb-8">
        Add Product Page
      </h2>
      <ProductForm />
    </div>
  );
}

export default AddProductPage;
