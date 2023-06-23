import Image from "next/image"
import React from "react"
import { Button } from "../ui"
import Link from "next/link"

type Props = {}

export default function Uniqueness({}: Props) {
  return (
    <div className="py-10">
      <div className="flex items-center justify-end mb-6">
        <h2 className="text-4xl font-bold w-full max-w-[35rem]">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>
      <div className="flex bg-white flex-wrap py-8">
        <div className="p-8 w-1/2 relative flex-[1_1_47rem] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] overflow-hidden">
          <h1 className="absolute top-8 left-8 right-8 bottom-8 flex items-center text-gray-100 font-black text-7xl sm:text-8xl  max-w-0">
            Different from others
          </h1>
          <div className="py-8 pr-16 flex flex-col gap-3 relative">
            <h3 className="font-semibold text-base">Using Good Quality Materials</h3>
            <p className="text-sm">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="py-8 pr-16 flex flex-col gap-3 relative">
            <h3 className="font-semibold text-base">Using Good Quality Materials</h3>
            <p className="text-sm">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="py-8 pr-16 flex flex-col gap-3 relative">
            <h3 className="font-semibold text-base">Using Good Quality Materials</h3>
            <p className="text-sm">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="py-8 pr-16 flex flex-col gap-3 relative">
            <h3 className="font-semibold text-base">Using Good Quality Materials</h3>
            <p className="text-sm">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="p-6 w-1/2 flex-[1_1_47rem] flex flex-wrap sm:flex-nowrap gap-4">
          <Image
            className="h-56 sm:h-full sm:w-48 object-cover"
            src="/Landing Page/unique.webp"
            alt="blonde girl posing in white hoodie"
            width={200}
            height={200}
          />
          <div className="flex flex-col justify-center p-0 sm:px-7 items-start gap-5">
            <p>
              This piece is ethically crafted in our small family-owned workshop in Peru with
              unmatched attention to detail and care. The Natural color is the actual natural color
              of the fiber, undyed and 100% traceable.
            </p>
            <Link className="inline" href="/all">
              <Button className="bg-black hover:bg-white text-white hover:text-black transition-all duration-300">See All Product</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
