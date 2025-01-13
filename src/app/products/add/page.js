import ProductForm from "@/components/products/Form";

function AddProductPage() {
  return (
    <div className="dark:bg-gray-800">
      <div className="container mx-auto p-10 md:p-14 lg:p-20">
        <div className="flex items-center flex-col">
          <h2 className="text-3xl font-semibold dark:text-white text-textColor mb-8">
            Add Product Page
          </h2>
          <ProductForm />
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
