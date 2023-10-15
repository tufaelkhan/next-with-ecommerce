import FormSubmitButton from "@/component/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: "Add Product || e-commerce"
}

async function addProduct( formData: FormData) {
    "use server";

    const session = await getServerSession(authOptions)
    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product")
    }

    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString();
    const image = formData.get("image")?.toString();
    const price = Number(formData.get("price") || 0)

    if(!name || !description || !image || !price){
        throw Error("missing required field")
    }

    // for(let i = 0; i < 50; i++){
    //     await prisma.product.create({
    //         data: {name, description, image, price},
    //     });
    // }

    await prisma.product.create({
        data: {name, description, image, price},
    })
    redirect('/')
}

export default async function AddProductPage(){
    const session = await getServerSession(authOptions)

    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product")
    }
    return (
        <div>
            <h1 className="text-4xl mt-5 mb-5 font-bold">Add product</h1>
            <form action={addProduct}>
            <input type="text" required name="name" placeholder="product name" className="input input-ghost w-full mb-3" />
            <textarea required placeholder="product description" name="description" className="textarea textarea-bordered mb-3 w-full" >
            </textarea>
            <input type="url" required name="image" placeholder="image link here" className="input input-ghost w-full mb-3" />
            <input type="number" required name="price" placeholder="price" className="input input-ghost w-full mb-3" />
            <FormSubmitButton type="submit" className="btn btn-primary btn-block">Add Product</FormSubmitButton>
            </form>
        </div>
    )
}