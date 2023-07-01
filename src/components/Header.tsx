import Image from "next/image"
import Link from "next/link"
import React from "react"
import SearchBar from "./SearchBar"
import { LucideShoppingCart } from "lucide-react"
import MobileMenu from "./MobileMenu"
import { navLinks } from "@/constants"
import CartIconButton from "./common/CartIconButton"

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
        <CartIconButton className="hidden lg:flex"/>
        <div className="flex lg:hidden justify-center items-center gap-3">
          <CartIconButton className="flex lg:hidden"/>
          <MobileMenu />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <SearchBar mobileScreen={true} />
      </div>
    </header>
  )
}
