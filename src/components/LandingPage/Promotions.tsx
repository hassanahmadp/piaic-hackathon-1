import Image from "next/image"
import React from "react"

type Props = {}

export default function Promotions({}: Props) {
  return (
    <div className="py-10">
      <p className="text-blue-700 text-center font-semibold text-sm">PROMOTIONS</p>
      <h2 className="font-bold text-xl text-center mb-10">Our Promotions Events</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(4,minmax(100px,1fr))] lg:grid-rows-[repeat(2,auto)] gap-4 mt-4">
        <div className="bg-[#D6D6D8] rounded-xl text-white lg:col-start-1 lg:col-span-2 flex flex-wrap justify-between">
          <div className="flex flex-col justify-center items-start text-black p-8 flex-auto">
            <h3 className="uppercase font-bold text-3xl">
              get up to <span className="text-4xl">60%</span>
            </h3>
            <p>For the summer season</p>
          </div>
          <div className="flex justify-center flex-auto items-center lg:items-end">
            <Image
              className="w-full lg:w-auto h-auto lg:h-full object-cover"
              src="/Landing Page/promotions_female_blue.webp"
              height={500}
              width={300}
              alt="blonde female posing in blue sweeter"
            />
          </div>
        </div>
        <div className="bg-[#212121] text-center rounded-xl text-white lg:col-start-1 lg:col-span-2 p-8 flex justify-center items-center flex-col">
          <h3 className="uppercase font-bold text-3xl">get 30% off</h3>
          <p className="text-xs uppercase mt-4 mb-1">Use promo code</p>
          <button className="py-2 w-full max-w-xs text-lg  bg-[#474747] rounded-lg">
            DINEWEEKENDSALE
          </button>
        </div>
        <div className="bg-[#EFE1C7] rounded-xl text-black lg:row-start-1 lg:row-span-2 lg:col-start-3 flex flex-col">
          <div className="px-4 py-6">
            <p>Flex Sweatshirt</p>
            <p>
              <del>$100.00</del>
              <span className="ml-2 text-lg font-semibold">$75.00</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/Landing Page/promotions_male_blue.webp"
              width={300}
              alt="promotions male flexing blue sweater"
              height={400}
            />
          </div>
        </div>
        <div className="bg-[#D7D7D9] rounded-xl text-black lg:row-start-1 lg:row-span-2 lg:col-start-4 flex flex-col">
          <div className="px-4 py-6">
            <p>Flex Push Button Bomber</p>
            <p>
              <del>$225.00</del>
              <span className="ml-2 text-lg font-semibold">$190.00</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/Landing Page/promotions_male.webp"
              width={300}
              alt="promotions male flexing green sweater"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
