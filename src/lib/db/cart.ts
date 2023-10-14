import { prisma } from "./prisma";
import {cookies} "next/dist/client/components/headers"
import {Cart, Prisma} from "@prisma/client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServersession } from "next-auth";

export type CartWithProduct = Prisma.CartGetPayload<{
    include: {items: {include: {product: true}}}
}>

export type CartItemWithProduct =  Prisma.CartItemGetPayload<{
    include: {product: true}
}>

export type ShoppingCart = Cart  & {
    size: number,
    subtotal: number,
}

export async function getCart( ): Promise<ShoppingCart | null> {
    const session = await getServerSession(authOptions)
    let cart: CartWithProduct | null = null

    if(session){

    }else{
        
    }

    const localCartId = cookies().get("localCartId")?.value;
    cart = localCartId ?
    await prisma.cart.findUnique({
        where: {id: localCartId},
        include: {items: {include: {product: true}}}
    })
    : null;

    if(!cart){
        return null;
    }
    return {
        ...cart,
        size: cart.items.reduce((acc, item) => acc + item.quantity, 0 ),
        subtotal: cart.items.reduce((acc, item)=> acc + item.quantity * item.product.price, 0),
    }
}

export async function createCart( ): Promise<ShoppingCart> {
    const session = await getServerSession(authOptions)
    let newCart: Cart;

    if(session){
        newCart = await prisma.cart.create({
            data: { userId: session.user.id}
        })
    }else{
        newCart = await prisma.cart.create({
            data:{}
        })    
        cookies().set("localCartId", newCart.id)
    }

    return {
        ...newCart,
        items: [],
        size: 0,
        subtotal: 0,
    }
}