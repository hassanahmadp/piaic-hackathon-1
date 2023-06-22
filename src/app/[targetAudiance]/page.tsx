import { SingleProduct } from "@/components"
import { dummyProducts } from "@/constants"
import React from "react"

type Props = {
  params: {
    targetAudiance: string
  }
}



export default function ProductList({ params: { targetAudiance } }: Props) {
  let allProducts: Product[] = []
  if (targetAudiance === "all") {
    allProducts = dummyProducts
  } else {
    allProducts = dummyProducts.filter(product => product.targetAudiance === targetAudiance)
  }
  return (
    <>
      <div className="container py-8 mx-auto px-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-8">
          {allProducts.map(product => (
            <SingleProduct key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  )
}
