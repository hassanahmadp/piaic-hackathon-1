'use client'
import Image from 'next/image'
import {BiTrash } from 'react-icons/bi'
import QuantityCounter from '../ProductPage/QuantityCounter'
import { useState } from 'react'

type Props = {}

export default function CartItem() {
  const [quantity, setQuantity] = useState<number>(1)
  return (
    <div className='flex bg-white rounded-xl p-4 gap-2 sm:gap-4 flex-wrap'>
      {/* <h2>jfdkls</h2> */}
      <Image className='rounded-lg w-full md:w-64' src="/dummy_product.png" alt="dummy person" width={300} height={300} />
      <div className="flex-auto py-5 flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <h3 className='font-medium text-2xl line-clamp-1'>Flex Push Button Bomber</h3>
          <BiTrash fontSize={30} />
        </div>
        <h4 className='text-stone-400 font-bold text-lg'>title</h4>
        <h4 className='mt-auto'>Delivery Estimation</h4>
        <h4 className='text-yellow-600 font-semibold'>5 Working Days</h4>
        <div className="flex justify-between mt-5 items-center">
          <h3 className='font-bold text-2xl'>$297</h3>
          <QuantityCounter quantity={quantity} setQuantity={setQuantity}/>
        </div>
      </div>
    </div>
  )
}