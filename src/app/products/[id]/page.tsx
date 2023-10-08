import PriceTag from "@/component/PriceTag"
import { prisma } from "@/lib/db/prisma"
import Image from "next/image"
import { notFound } from "next/navigation"

interface ProductPageProps {
    params: {
        id: string,
    }
}

export default async function ProductPage({params: {id}}: ProductPageProps) {
    const product = await prisma.product.findUnique({where:{id}})
    if(!product) notFound()
    return (
        <div className="flex flex-col lg:flex-row">
            <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg" priority/>
            <div>
                <h2 className="text-5xl font-bold">{product.name}</h2>
                <PriceTag price={product.price} className="mt-5 "/>
                <p className="py-4">{product.description}</p>
            </div>
        </div>
        )
}