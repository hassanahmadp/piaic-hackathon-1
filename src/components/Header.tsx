import Image from "next/image"
import Link from "next/link"
import React from "react"
import SearchBar from "./SearchBar"
import { LucideShoppingCart } from "lucide-react"
import MobileMenu from "./MobileMenu"
import { navLinks } from "@/constants"

type Props = {}

export default function Header({}: Props) {
  const cartCount = 4
  return (
    <header>
      <div className="pt-8 pb-5 container mx-auto px-4 flex justify-center items-center gap-5">
        <Link className="mr-auto" href="/">
          <Image src="/Logo.webp" width={140} height={25} alt="logo" />
        </Link>
        <div className="mr-auto gap-5 hidden lg:flex">
          {navLinks.map(link => (
            <Link key={link.path} href={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
        <SearchBar />
        <Link
          className="ml-auto hidden lg:flex justify-center items-center bg-zinc-300 h-10 rounded-full transition-transform duration-300 aspect-square hover:scale-110 relative"
          href="/cart"
        >
          <div className="pointer-events-none h-5 absolute top-0 right-0 bg-red-600 aspect-square text-white text-xs flex justify-center items-center rounded-full">
            {cartCount > 9 ? "9+" : cartCount}
          </div>
          <LucideShoppingCart width={17} />
        </Link>
        <div className="flex lg:hidden justify-center items-center gap-3">
          <Link
            className="ml-auto flex justify-center items-center bg-zinc-300 h-10 rounded-full transition-transform duration-300 aspect-square hover:scale-110 relative"
            href="/cart"
          >
            <div className="pointer-events-none h-5 absolute top-0 right-0 bg-red-600 aspect-square text-white text-xs flex justify-center items-center rounded-full">
              {cartCount > 9 ? "9+" : cartCount}
            </div>
            <LucideShoppingCart width={17} />
          </Link>
          <MobileMenu />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <SearchBar mobileScreen={true} />
      </div>
    </header>
  )
}
