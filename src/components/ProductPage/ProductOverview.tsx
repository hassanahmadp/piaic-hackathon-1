import React from 'react'
import BgTextHeading from '../BgTextHeading'

type Props = {
  overview: ProductOverview
}

export default function ProductOverview({overview}: Props) {
  const {detail, carePoints} = overview
  return (
    <div className="container mx-auto py-8 px-4 sm:px-11 bg-white mb-8">
      <BgTextHeading title="Product Overview" bg="Overview" />
      <hr className="border border-t-0 border-black" />
      <div className='pt-8 flex flex-col gap-8'>
        <div className="flex flex-wrap gap-3">
          <h3 className='font-bold text-lg text-stone-500 uppercase flex-[1_1_15rem] w-3/12'>Product Detail</h3>
          <p className='flex-auto w-9/12'>{detail}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <h3 className='font-bold text-lg text-stone-500 uppercase flex-[1_1_15rem] w-3/12'>Product Care</h3>
          <ul className='flex-auto w-9/12 list-disc list-inside font-semibold'>
            {carePoints.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}