type PageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductDetails({ params }: PageProps) {
  const { productId } = await params;

  return (
    <div>
      <h2>Details about Product {productId}</h2>
    </div>
  );
}
