import { HeroSection, NewsLetter, Products, Promotions, Uniqueness } from "@/components"

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection/>
      <Promotions/>
      <Products/>
      <Uniqueness/>
      <NewsLetter/>
    </div>
  )
}
