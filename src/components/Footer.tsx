import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"

type Props = {}

const socials = [
  { icon: <FaTwitter />, link: "" },
  { icon: <FaFacebookF />, link: "" },
  { icon: <FaLinkedinIn />, link: "" },
]

export default function Footer({}: Props) {
  return (
    <footer>
      <div className="container mx-auto px-4 py-10 justify-between flex gap-4 flex-wrap">
        <div className="flex flex-col justify-between h-48 max-w-xl flex-auto">
          <Image src="/Logo.webp" alt="footer logo" width={160} height={90} />
          <p>
            Small, artisan label that offers a thoughtfully curated collection of high quality
            everyday essentials made.
          </p>
          <div className="flex flex-wrap gap-5">
            {socials.map((social,idx) => (
              <div key={idx} className="aspect-square rounded-md bg-gray-300 h-12 flex justify-center items-center">
                {social.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 flex-wrap">
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h3 className="font-bold text-gray-700">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="/">About</Link>
              <Link href="/">Term of Use</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">How it Works</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h3 className="font-bold text-gray-700">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="/">About</Link>
              <Link href="/">Term of Use</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">How it Works</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h3 className="font-bold text-gray-700">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="/">About</Link>
              <Link href="/">Term of Use</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">How it Works</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
