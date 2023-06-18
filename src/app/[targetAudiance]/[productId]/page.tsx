import { dummyProducts } from '@/constants'
import React from 'react'

type Props = {
  params: {
    productId: string
  }
}

export default function page({params: {productId}}: Props) {
  const product = dummyProducts.find(prod => prod.productId === productId)
  return (
    <div className='container mx-auto text-9xl font-extrabold'>{product?.name} / {product?.price}</div>
  )
}