import { dummyProducts } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  params: {
    targetAudiance: string
  }
}

function SingleProduct(props: Product) {
  return (
    <Link href={`/${props.targetAudiance}/${props.id}`} className="flex flex-col">
      <Image className="w-full rounded-2xl" src={props.images[0]} alt="product" width={3000} height={3000}/>
      <h2 className="line-clamp-1 pt-2 font-semibold text-lg" title={props.name}>{props.name}</h2>
      <h3 className=" ">{props.type}</h3>
      <h1 className="font-semibold text-xl">${props.price}</h1>
    </Link>
  )
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
