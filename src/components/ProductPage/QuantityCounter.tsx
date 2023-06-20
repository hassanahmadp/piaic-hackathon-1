import React from "react"

type Props = { quantity: number; setQuantity: React.Dispatch<React.SetStateAction<number>> }

export default function QuantityCounter({ quantity, setQuantity }: Props) {

  const handler = (str: "inc" | "dec") => () => {
    if (str === "inc") {
      setQuantity(prev => (prev += 1))
    } else {
      setQuantity(prev => (prev === 1 ? 1 : --prev))
    }
  }
  return (
    <div className="flex gap-4 items-center">
      <button
        className="flex aspect-square h-8 bg-stone-300 text-stone-600 hover:bg-stone-600 hover:text-stone-300 rounded-none sm:rounded-full justify-center items-center"
        onClick={handler("dec")}
      >
        -
      </button>
      {quantity}
      <button
        className="flex aspect-square h-8 bg-stone-300 text-stone-600 hover:bg-stone-600 hover:text-stone-300 rounded-none sm:rounded-full justify-center items-center"
        onClick={handler("inc")}
      >
        +
      </button>
    </div>
  )
}
