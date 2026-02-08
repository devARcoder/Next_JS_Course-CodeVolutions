import { notFound } from "next/navigation";
type ReviewDetailsProps = {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
};
export default async function ReviewDetails({ params} : ReviewDetailsProps) {
    const {productId, reviewId} = await params;

    if (parseInt(reviewId) > 100){
        notFound();
    }
    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}