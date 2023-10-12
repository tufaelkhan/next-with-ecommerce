"use client"

import { CartItemWithProduct } from "@/lib/db/cart"
import Image from "next/image"
import Link from "next/link"
import formatPrice from "@/lib/Format"
import {useTransition} from "react"

interface CartEntryProps{
    cartItem: CartItemWithProduct,
    setProductQuantity: ( productId: string, quantity: number) => Promise<vaid>
}
export default function CartEntry({cartItem : {product, quantity}, setProductQuantity }: CartEntryProps){
    const [ isPending, startTransition ] = useTransition()
    const quantityOptions : JSX.Element[] = []
    for (let i = 1; i <= 99; i++){
        quantityOptions.push(<option value={i} key={i}>{i}</option>)
    }
    return (
        <div>
            <div className="flex flex-wrap items-center gap-3 ">
                <Image src={product?.image} alt={product?.name}
                width={200} height={200} className="rounded-lg"/>
            </div>
            <div>
                <Link href={"/products/" + product.id} className="font-bold">{product.name}</Link>
                <div>Price: {formatPrice(product.price)} </div>
                <div className="my-2 flex items-center gap-2">
                    Quantity:
                    <select className="select select-bordered w-full max-w-[800px]" defaultValue={quantity}
                    onChange={e => {
                        const newQuantity = parseInt(e.currentTarget.value)
                        startTransition(async ()=>{
                            await setProductQuantity(product.id, newQuantity)
                        })
                    }}
                    >{quantityOptions}</select>
                </div>
                <div className="flex items-center gap-2">
                    Total: {formatPrice(product.price * quantity)}
                {isPending && (
                    <span className="loading loading-spinner loading-sm"/>
                )}
                </div>
            </div>
            <div className="divider"/>
        </div>
    )
}