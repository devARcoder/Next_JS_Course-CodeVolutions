import { notFound } from "next/navigation";
type ReviewDetailsProps = {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
};

function getRandomIn(count: number) {
    return Math.floor(Math.random() * count)
}
export default async function ReviewDetails({ params} : ReviewDetailsProps) {
    const {productId, reviewId} = await params;
    const random = getRandomIn(2);

    if (random === 1){
        throw new Error("Error loading review")
    }

    if (parseInt(reviewId) > 100){
        notFound();
    }
    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}