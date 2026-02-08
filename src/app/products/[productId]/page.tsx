type PageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductDetails({ params }: PageProps) {
  const { productId } = await params;

  return (
    <div>
      <h1>Product Details Page</h1>
      <h2>Details about Product {productId}</h2>
    </div>
  );
}
