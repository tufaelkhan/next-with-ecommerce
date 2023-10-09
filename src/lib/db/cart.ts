import { prisma } from "./prisma";
import {cookies} "next/dist/client/components/headers"

export async function getCart( ) {
    const localCartId = cookies().get("localCartId")?.value;
    const cart = localCartId ?
    await prisma.cart.findUnique({
        where: {id: localCartId}
    })
}

export async function createCart( ) {
    const newCart = await prisma.cart.create({
        data:{}
    })
    
    cookies().set("localCartId", newCart.id)
}