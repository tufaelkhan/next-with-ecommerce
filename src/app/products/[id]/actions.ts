"use server"

import { createCart, getCart } from "@/lib/db/cart"

export async function incrementProductQuantity(productId: string) {
    const cart = (await getCart()) ?? (await createCart())
}