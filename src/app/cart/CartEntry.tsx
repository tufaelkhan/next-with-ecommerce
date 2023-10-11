"use client"

import { CartItemWithProduct } from "@/lib/db/cart"
import Image from "next/image"
import Link from "next/link"
import formatPrice from "@/lib/Format"

interface CartEntryProps{
    cartItem: CartItemWithProduct,
}
export default function CartEntry({cartItem : {product, quantity}}: CartEntryProps){
    return (
        <div>
            <div className="flex flex-wrap items-center gap-3 ">
                <Image src={product?.image} alt={product?.name}
                width={200} height={200} className="rounded-lg"/>
            </div>
            <div>
                <Link href={"/products/" + product.id} className="font-bold">{product.name}</Link>
                <div>Price: {formatPrice(product.price)} </div>
                <div className="flex items-center gap-2">
                    Total: {formatPrice(product.price * quantity)}
                </div>
            </div>
            <div className="divider"/>
        </div>
    )
}