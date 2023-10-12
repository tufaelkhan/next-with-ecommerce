import { getCart } from "@/lib/db/cart"
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import formatPrice from "@/lib/Format";

export const metadata = {
    title:"your cart - e-commerce",

}

export default async function CartPage() {
    const cart = await getCart();
    return (
        <div>
            <h2 className="text-3xl font-bold mb-5 ">shopping cart</h2>
            {
                cart?.items.map(cartItem => <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={setProductQuantity}></CartEntry>)
            }

            {!cart?.items.length && <p>Your cart is empty</p>}
            <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">
                    Total: {formatPrice(cart?.subtotal || 0)}
                </p>
                <button className="btn btn-primary sm:w-[200px]">CheckOut</button>
            </div>
        </div>
    )
}