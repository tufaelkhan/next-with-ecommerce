import { Product } from "@prisma/client"
import Link from "next/link"

interface ProductCardProps{
    product: Product,
}

export default function ProductCard({product}: ProductCardProps){
    return (
        <Link href={"/products" + product.id} className="card w-full bg-base-100 hover:shadow-xl transition duration-300 ">
            <div className="card-body">
                <h2 className="card-title">
                    {product?.name}
                </h2>
                <p className="">{product?.description}</p>
                
            </div>
        </Link>
    )
}