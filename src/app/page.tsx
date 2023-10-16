import PaginationBar from "@/component/PaginationBar"
import ProductCard from "@/component/ProductCard"
import { prisma } from "@/lib/db/prisma"
import Image from "next/image"
import Link from "next/link"

interface HomeProps{
  searchParams: { page: string}
}

export default async function Home({searchParams: {page = "1"}}: HomeProps) {
  const currentPage = parseInt(page)

  const pageSize = 6
  const heroItemCart = 1

  const totalItemCart = await prisma.product.count();
  const totalPages = Math.ceil((totalItemCart - heroItemCart) / pageSize)

  const products = await prisma.product.findMany({
    orderBy: {id: "desc"},
    skip: (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCart),
    take: pageSize + (currentPage === 1 ? heroItemCart : 0)
  })
  return (
    <div className="flex flex-col items-center ">
      { currentPage === 1 && 
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
      }
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
    {
      (currentPage === 1 ? products.slice(1) : products).map(product =>(
        <ProductCard product={product} key={product.id}/>
      ))
    }
      </div>
      { totalPages > 1 &&
      <PaginationBar currentPage={currentPage} totalPage={totalPages}/>
      }
    </div>
  )
}
