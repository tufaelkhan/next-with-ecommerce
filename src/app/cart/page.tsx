import { getCart } from "@/lib/db/cart"

export const metadata = {
    title:"your cart - e-commerce",

}

export default async function CartPage() {
    const cart = await getCart();
    return (
        <div>
            <h2 className="text-3xl font-bold mb-5 ">shopping cart</h2>
        </div>
    )
}