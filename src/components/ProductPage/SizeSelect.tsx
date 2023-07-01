import React from 'react'

type Props = {
  product: Product | undefined
  selectedSize: Sizes | ""
  setSelectedSize: React.Dispatch<React.SetStateAction<Sizes | "">>
}

export default function SizeSelect({product, selectedSize, setSelectedSize}: Props) {
  return (
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
  )
}