import { LucideSearch } from "lucide-react"
import React from "react"

type Props = {
  mobileScreen?: boolean
}

export default function SearchBar({ mobileScreen = false }: Props) {
  return (
    <div
      className={`${
        mobileScreen ? "flex sm:hidden" : "max-w-xs hidden sm:flex"
      } w-full h-6 border overflow-hidden border-black rounded-md items-center`}
    >
      <label htmlFor="search">
        <LucideSearch className="mx-1" width={16} />
      </label>
      <input
        type="text"
        placeholder="What are you looking for?"
        className="flex-auto h-6 border-none focus:outline-transparent text-sm"
        id="search"
      />
    </div>
  )
}
