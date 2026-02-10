import { Metadata } from "next";
type PageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export const generateMetaData = async ({ params }: PageProps): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId} details`,
    description: `This page contains details about product ${productId}`,
}
}

export default async function ProductDetails({ params }: PageProps) {
  const { productId } = await params;

  return (
    <div>
      <h2>Details about Product {productId}</h2>
    </div>
  );
}
//check
