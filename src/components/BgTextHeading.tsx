import React from 'react'

type Props = {
  title: string,
  bg: string
}

export default function BgTextHeading({title,bg}: Props) {
  return (
    <div className='relative'>
      <h1 className='text-8xl hidden md:block text-gray-100 font-extrabold'>{bg}</h1>
      <h3 className='static md:absolute text-4xl md:text-xl font-bold top-0 left-0 h-full w-full flex items-center'>{title}</h3>
    </div>
  )
}