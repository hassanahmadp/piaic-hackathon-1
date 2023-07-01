"use client"
import { Button, CartItem } from "@/components"
import { BiShoppingBag} from 'react-icons/bi'
import { useAppSelector } from "@/store/store"
import React from "react"
import Link from "next/link"

type Props = {}

export default function CartPage({}: Props) {
  const cartList = useAppSelector(state => state.CartReducer)

  const totalData: { total: number; subTotal: number } = cartList.reduce(
    (prev, curr) => {
      return {
        total: prev.total + curr.quantity,
        subTotal: prev.subTotal + curr.quantity * curr.price,
      }
    },
    { total: 0, subTotal: 0 },
  )

  return (
    <div className="container mx-auto px-4 my-8 h-full min-h-[25rem] relative">
      <h2 className="font-bold text-xl mb-4">Shopping Cart</h2>
      <div className="flex justify-center h-[calc(100%-4.75rem)] flex-wrap items-center gap-8">
        {cartList.length <= 0 && (
          <>
            <div className="flex flex-col justify-center items-center">
              <BiShoppingBag fontSize={200}/>
              <h1 className="font-black text-3xl mt-4">Your Shopping cart is empty</h1>
              <Link href="/all" className="mt-4">
              <Button className="text-white hover:text-black bg-black hover:bg-white border-black border">Browse Products</Button>
              </Link>
            </div>
          </>
        )}
        {cartList.length > 0 && (
          <>
            <div className="flex-[1_1_30rem] flex h-full flex-col pb-6 gap-8">
              {cartList.map(item => (
                <CartItem key={item.id} id={item.id} />
              ))}
            </div>
            <div className="bg-white py-8 w-full shadow-lg rounded-lg lg:w-80 px-5 sticky self-start top-8">
              <h2 className="font-bold text-xl mb-5">Order Summary</h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>{totalData.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>${totalData.subTotal}</span>
                </div>
                <button className="bg-black text-white py-2 px-4 hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
