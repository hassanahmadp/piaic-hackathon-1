import React from "react"
import { Button } from "../ui"

type Props = {}

export default function NewsLetter({}: Props) {
  return (
    <div className="flex flex-col text-center relative justify-center items-center h-[20rem] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 font-extrabold text-9xl -translate-x-1/2 -translate-y-1/2 text-gray-200">
        Newsletter
      </div>
      <form className="relative">
        <h2 className="text-center text-4xl font-bold">Subscribe Our Newsletter</h2>
        <p className="mt-1 sm:-mt-1 text-sm font-semibold text-gray-500">
          Get the latest information and promo offers directly
        </p>
        <div className="flex mt-6 gap-2 h-auto sm:h-10 flex-wrap">
          <input
            type="email"
            placeholder="Input email address"
            className="py-2 px-4 bg-zinc-100 h-10 sm:bg-zinc-50 flex-auto border border-black"
          />
          <Button
            className="border flex-auto sm:flex-initial w-28 border-black bg-black hover:bg-white text-white hover:text-black rounded-none whitespace-nowrap h-10"
            type="submit"
          >
            Get Started
          </Button>
        </div>
      </form>
    </div>
  )
}
