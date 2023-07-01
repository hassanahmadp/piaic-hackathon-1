type Link = {
  path: string,
  name: string,
}

type Product = {
  id: string
  name: string
  images: string[]
  targetAudiance: TargetAudiance
  type: string
  price: number
  sizes: Sizes[]
  overview: ProductOverview
}

type TargetAudiance = 'male' | 'female' | 'kids'

type Sizes = ("xs" | "s" | "m" | "l" | "xl")

type ProductOverview = {
  detail: string
  carePoints: string[]
}

interface CartItem extends Product {
  quantity: number
  size: Sizes | ""
  deliveryDays: number
}