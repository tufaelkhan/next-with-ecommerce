import { getCart } from "@/lib/db/cart";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
    "use server"

    const searchQuery = formData.get("searchQuery")?.toString();
    if(searchQuery){
        redirect("/search?query" + searchQuery)
    }

}

export default async function Navbar(){
    const cart = await getCart();

    return (
        <div className="bg-base-100 ">
            <div className="navbar max-w-7xl p-4 m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-4xl normal-case">
                        <Image src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" height={40} width={40} alt="e-commerce logo"/>
                        e-commerce
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input type="text"
                            name="searchQuery" placeholder="search"
                            className="input input-bordered w-full  min-w-[100px]" />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}/>
                </div>
            </div>
        </div>
    )
}