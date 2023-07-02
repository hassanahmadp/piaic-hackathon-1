"use client"

import { capitalizeString } from "@/constants/utils"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { ProductOverview } from "@/components"
import QuantityCounter from "@/components/ProductPage/QuantityCounter"
import { AppDispatch, useAppSelector } from "@/store/store"
import { useDispatch } from "react-redux"
import { addToCart } from "@/store/features"
import toast from 'react-hot-toast'

type Props = {
  params: {
    productId: string
  }
}

export default function page({ params: { productId } }: Props) {
  const allProducts = useAppSelector(state => state.ProductReducer)
  const dispatch = useDispatch<AppDispatch>()

  const product = allProducts.find(prod => prod.id === productId)
  const [currentImage, setCurrentImage] = useState<string>(product?.images[0] || "")
  const [selectedSize, setSelectedSize] = useState<Sizes | "">(product?.sizes[0] || "")
  const [quantity, setQuantity] = useState<number>(1)

  const addToCartHandler = () => {
    // @ts-ignore
    dispatch(addToCart({ item: { ...product, quantity, size: selectedSize, deliveryDays: 5 } }))
    // toast.success("Product Successfully Added to Cart", {position: 'bottom-center'})
  }

  const quantityHandler = (type: "inc" | "dec") => {
    if (type === "inc") {
      setQuantity(prev => (prev === 900 ? 900 : prev + 1))
    } else {
      setQuantity(prev => (prev === 1 ? 1 : prev - 1))
    }
  }

  useEffect(() => {
    setQuantity(1)
  }, [selectedSize])
  

  return (
    <>
      <div className="container mx-auto px-4 py-8 flex gap-8 flex-wrap">
        <div className="flex flex-[1_1_35rem] flex-col sm:flex-row gap-4 w-7/12">
          <div className="flex max-w-full order-2 sm:order-1 overflow-auto max-h-[40rem] flex-row sm:flex-col gap-4">
            {product?.images.map((img, idx) => (
              <Image
                key={idx}
                onMouseEnter={() => setCurrentImage(img)}
                className="h-20 w-20"
                src={img}
                alt="product"
                height={500}
                width={500}
              />
            ))}
          </div>
          <div className="flex-auto order-1 sm:order-2">
            <Image
              className="w-full"
              src={currentImage}
              width={1000}
              height={1000}
              alt="main product"
            />
          </div>
        </div>
        <div className="flex-auto w-5/2 text-center sm:text-left py-0 sm:py-8">
          <h2 className="text-3xl font-medium sm:line-clamp-4" title={product?.name}>
            {product?.name}
          </h2>
          <h3 className="text-md font-bold text-stone-500 mt-2">
            {capitalizeString(product?.type || "")}
          </h3>
          <div className="flex gap-4 py-2 justify-center sm:justify-start">
            {product?.sizes.map(size => (
              <div
                key={size}
                className={`flex justify-center items-center aspect-square rounded-full h-12 border-2 border-stone-400 sm:border-transparent hover:border-stone-400 cursor-pointer hover:shadow-2xl ${
                  selectedSize === size ? "bg-stone-400 text-white" : "bg-white text-black"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size.toUpperCase()}
              </div>
            ))}
          </div>
          <div className="flex gap-10 flex-wrap justify-center sm:justify-start items-center">
            <span className="hidden sm:inline pb-5 sm:pb-0">Quantity:</span>
            <QuantityCounter quantity={quantity} handler={quantityHandler} />
          </div>
          <div className="flex gap-4 py-5 font-bold justify-center items-center w-full sm:w-[60%]">
            <button
              className="flex-auto sm:flex-auto bg-stone-800 hover:bg-white py-2 text-sm border-black border-2 transition-all duration-200 text-white hover:text-stone-800"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
            <h3 className="flex-auto sm:flex-auto text-2xl">${product?.price}</h3>
          </div>
        </div>
      </div>
      {product?.overview && <ProductOverview overview={product?.overview} />}
    </>
  )
}
