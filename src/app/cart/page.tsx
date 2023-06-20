import { CartItem } from "@/components"
import React from "react"

type Props = {}

export default function CartPage({}: Props) {
  return (
    <div className="container mx-auto px-4 my-8 relative">
      <h2 className="font-bold text-xl mb-4">Shopping Cart</h2>
      <div className="flex justify-center flex-wrap items-center gap-8">
        <div className="flex-[1_1_30rem] flex flex-col pb-6 gap-8">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(item => (
            <CartItem />
          ))}
        </div>
        <div className="bg-white py-8 w-full shadow-lg rounded-lg lg:w-80 px-5 sticky self-start top-8">
          <h2 className="font-bold text-xl mb-5">Order Summary</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>Quantiy</span>
              <span>2</span>
            </div>
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>$195</span>
            </div>
            <button className="bg-black text-white py-2 px-4 hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
