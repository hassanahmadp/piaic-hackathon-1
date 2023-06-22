import { dummyProducts } from "@/constants"
import React from "react"
import { SingleProduct } from "../ProductListing/SingleProduct"

type Props = {}

export default function Products({}: Props) {
  return (
    <div className="py-10">
      <p className="text-blue-700 text-center font-semibold text-sm">PRODUCTS</p>
      <h2 className="font-bold text-xl text-center mb-10">Check What We Have</h2>
      <div className="mx-auto w-full max-w-[1200px] px-0 sm:px-7">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 justify-center items-center">
          {/* <div className='flex flex-wrap gap-4 justify-center items-center'> */}
          {dummyProducts.slice(0, 3).map((product: Product) => (
            <div className="transition-all duration-500 scale" key={product.id}>
              <SingleProduct {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
