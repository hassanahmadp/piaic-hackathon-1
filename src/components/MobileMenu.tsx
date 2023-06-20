"use client"

import React, { useState, useEffect } from "react"
import { LucideMenu, LucideX } from "lucide-react"
import Link from "next/link"
import { navLinks } from "@/constants"

type Props = {}

export default function MobileMenu({}: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false)


  return (
    <>
      <LucideMenu id="mobile_menu_opener" className="flex lg:hidden cursor-pointer" onClick={() => setShowMenu(true)} />
      <div
        id="mobile_menu"
        className={`fixed w-screen h-screen flex flex-col items-center transition-all duration-300 justify-center gap-6 [&>a]:w-full text-center px-4 top-0 right-0 z-50 overflow-y-auto bg-white shadow-md max-w-sm ${
          !showMenu ? "translate-x-full opacity-0 pointer-events-none" : ""
        }`}
      >
        {navLinks.map(link => (
          <Link key={link.path} onClick={() => setShowMenu(false)} href={link.path}>
            {link.name}
          </Link>
        ))}
        <div
          className=" absolute top-8 right-7 flex justify-center items-center bg-zinc-300 h-10 rounded-full transition-transform duration-300 aspect-square hover:scale-110 cursor-pointer"
          onClick={() => setShowMenu(false)}
        >
          <LucideX />
        </div>
      </div>
    </>
  )
}
