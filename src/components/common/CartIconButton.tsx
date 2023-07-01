'use client'
import Link from "next/link"
import React from "react"
import { LucideShoppingCart } from "lucide-react"
import { useAppSelector } from "@/store/store"

type Props = {
  className: string
}

export default function CartIconButton({className}: Props) {
  const cartList = useAppSelector(state => state.CartReducer)
  return (
    <Link
      className={`ml-auto ${className} justify-center items-center bg-zinc-300 h-10 rounded-full transition-transform duration-300 aspect-square hover:scale-110 relative`}
      href="/cart"
    >
      <div className="pointer-events-none h-5 absolute top-0 right-0 bg-red-600 aspect-square text-white text-xs flex justify-center items-center rounded-full">
        {cartList.length > 9 ? "9+" : cartList.length}
      </div>
      <LucideShoppingCart width={17} />
    </Link>
  )
}
