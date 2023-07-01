'use client'
import Image from 'next/image'
import {BiTrash } from 'react-icons/bi'
import QuantityCounter from '../ProductPage/QuantityCounter'
import { useState } from 'react'
import SizeSelect from '../ProductPage/SizeSelect'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/store/store'
import { decreaseCount, deleteFromCart, increaseCount } from '@/store/features'

type Props = {
  id: string
}

export default function CartItem({id}: Props) {
  const dispatch = useDispatch<AppDispatch>()
  const cartList = useAppSelector(state => state.CartReducer)

  const item = cartList.find(item => item.id === id)

  const quantityHandler = (type: 'inc' | 'dec') => {
    if(type === 'inc') dispatch(increaseCount({id}))
    else dispatch(decreaseCount({id}))
  }
  
  return (
    <div className='flex bg-white rounded-xl p-4 gap-2 sm:gap-4 flex-wrap'>
      {/* <h2>jfdkls</h2> */}
      <Image className='rounded-lg w-full md:w-64' src={item?.images[0] || ""} alt="product image" width={300} height={300} />
      <div className="flex-auto py-5 flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <h3 className='font-medium text-2xl line-clamp-2'>{item?.name}</h3>
          <BiTrash onClick={() => dispatch(deleteFromCart({id}))} fontSize={30} />
        </div>
        <h4 className='text-stone-400 font-bold text-lg'>{item?.type}</h4>
        <h4 className='text-stone-700 font-bold text-xl'> size: {item?.size.toUpperCase()}</h4>
        
        <h4 className='mt-auto'>Delivery Estimation</h4>
        <h4 className='text-yellow-600 font-semibold'>{item?.deliveryDays} Working Days</h4>
        <div className="flex justify-between mt-5 items-center">
          <h3 className='font-bold text-2xl'>${item?.price}</h3>
          {/* <QuantityCounter handler={quantityHandler} quantity={item?.quantity}/> */}
          <QuantityCounter handler={quantityHandler} quantity={item?.quantity}/>
        </div>
      </div>
    </div>
  )
}