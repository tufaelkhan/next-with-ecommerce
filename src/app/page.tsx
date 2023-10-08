import { prisma } from "@/lib/db/prisma"

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {id: "desc"}
  })
  return (
    <div >
      
    </div>
  )
}
