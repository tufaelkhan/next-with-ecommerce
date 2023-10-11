"use server"

import { createCart, getCart } from "@/lib/db/cart"

export async function setProductQuantity(productId: string, quantity: number) {
    const cart = (await getCart()) ?? (await createCart())

    const articleInCart = cart.items.find(item => item.productId === productId) 
}