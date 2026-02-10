import Link from "next/link"
export default function Products() {
    const productId = 100;
    return (
        <>
        <Link href="/">Back to Home</Link>
        <h1>Products List</h1>
        <ul>
            <li><Link href="products/1">Product 1</Link></li>
            <li><Link href="products/2">Product 2</Link></li>
            <li><Link href="products/3" replace>Product 3</Link></li>
            <li><Link href={`products/${productId}`}>Product {productId}</Link></li>
        </ul>
        </>
        
    )
}