import PaginationBar from "@/component/PaginationBar"
import ProductCard from "@/component/ProductCard"
import { prisma } from "@/lib/db/prisma"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {id: "desc"}
  })
  return (
    <div className="flex flex-col items-center ">
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
      <Image src={products[0].image} alt={products[0].name}
      width={400}
      height={800}
      className="w-full max-w-sm rounded-lg shadow-2xl"
      priority
      />
      <div>
        <h2 className="text-5xl font-bold">{products[0].name}</h2>
        <p className="py-6 ">{products[0].description}</p>
        <Link href={"/products" + products[0].id} className="btn btn-primary">check it out</Link>
      </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      products.slice(1).map(product =>(
        <ProductCard product={product} key={product.id}/>
      ))
    }
      </div>
      <PaginationBar currentPage={13} totalPage={99}/>
    </div>
  )
}
