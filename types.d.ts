type Link = {
  path: string,
  name: string,
}

type Product = {
  id: string
  name: string
  images: string[]
  targetAudiance: 'male' | 'female' | 'kids'
  type: string
  price: number
  sizes: ("xs" | "s" | "m" | "l" | "xl")[]
  overview: ProductOverview
}

type ProductOverview = {
  detail: string
  carePoints: string[]
}