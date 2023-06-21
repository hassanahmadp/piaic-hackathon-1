import React from 'react'

type Props = {}

export default function Promotions({}: Props) {
  return (
    <div className="py-10">
      <p className="text-blue-700 text-center font-semibold text-sm">PROMOTIONS</p>
      <h2 className="font-bold text-xl text-center">Our Promotions Events</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(4,minmax(100px,1fr))] lg:grid-rows-[repeat(2,200px)] gap-4 mt-4">
        <div className="bg-[#D6D6D8] rounded-lg text-white lg:col-start-1 lg:col-span-2 flex">

        </div>
        <div className="bg-[#212121] rounded-lg text-white lg:col-start-1 lg:col-span-2"></div>
        <div className="bg-[#EFE1C7] rounded-lg text-white lg:row-start-1 lg:row-span-2 lg:col-start-3">
          
        </div>
        <div className="bg-[#D7D7D9] rounded-lg text-white lg:row-start-1 lg:row-span-2 lg:col-start-4">
          
        </div>
      </div>
    </div>
  )
}