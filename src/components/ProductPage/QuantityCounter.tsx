import React from "react"

type Props = {
  handler: (type: 'inc' | 'dec')  => unknown,
  quantity: number | undefined
}

export default function QuantityCounter({handler, quantity}: Props) {
  

  return (
    <div className="flex items-center">
      <button
        className="flex aspect-square h-8 bg-stone-300 text-stone-600 hover:bg-stone-600 hover:text-stone-300 rounded-none sm:rounded-full justify-center items-center"
        onClick={() => handler('dec')}
      >
        -
      </button>
      <p className="w-12 text-center">{quantity}</p>
      <button
        className="flex aspect-square h-8 bg-stone-300 text-stone-600 hover:bg-stone-600 hover:text-stone-300 rounded-none sm:rounded-full justify-center items-center"
        onClick={() => handler("inc")}
      >
        +
      </button>
    </div>
  )
}
