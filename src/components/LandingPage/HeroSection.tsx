import React from "react"
import { Button } from "../ui"
import Image from "next/image"

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <div className="flex items-center">
      <div className="h-[80vh] min-h-[30rem] lg:h-full w-full text-center lg:text-left lg:w-1/2 flex justify-center items-center lg:items-start flex-col">
        <Button variant="default" className="bg-blue-200 mb-5 text-blue-700" size="sm">
          Sale 70%
        </Button>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl mb-2">An Industrial Take on Streetwear</h2>
        <p className="text-base text-gray-600 mb-8">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <Button
          variant="default"
          size="lg"
          className="rounded-none bg-black hover:bg-white text-white hover:text-black border border-black"
        >
          Start Shopping
        </Button>
        <div className="flex justify-between flex-wrap gap-4 md:gap-8 w-4/5 mt-24">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex-[1_1_5rem] flex justify-center md:justify-start">
              <Image
                src={`/Landing Page/brands/Featured${i}.webp`}
                alt="brand logo"
                width={100}
                height={35}
              />

            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 h-full hidden lg:flex min-h-[40rem] overflow-hidden relative">
        <div className="absolute bottom-4 w-[80%] aspect-square rounded-full left-1/2 -translate-x-1/2 bg-[#FEECE3]"></div>
        <Image
          className="absolute bottom-0 h-full left-[55%] object-cover -translate-x-1/2"
          src="/Landing Page/hero_female_cover.webp"
          alt="girl posing in brown dress"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
