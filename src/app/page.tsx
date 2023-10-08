import ProductCard from "@/component/ProductCard"
import { prisma } from "@/lib/db/prisma"

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {id: "desc"}
  })
  return (
    <div >
      <ProductCard product={products[0]}/>
    </div>
  )
}
