"use client"
import { SingleProduct } from "@/components"
import { filterProducts } from "@/store/features"
import { AppDispatch, useAppSelector } from "@/store/store"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

type Props = {
  params: {
    targetAudiance: TargetAudiance | 'all'
  }
}



export default function ProductList({ params: { targetAudiance } }: Props) {
  const allProducts = useAppSelector(state => state.ProductReducer)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(filterProducts({targetAudiance}))
  }, [targetAudiance])
  
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
