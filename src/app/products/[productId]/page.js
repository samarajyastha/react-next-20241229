async function ProductById({ params }) {
  const id = await params.productId;

  return <div>Product of id: {id}</div>;
}

export default ProductById;
