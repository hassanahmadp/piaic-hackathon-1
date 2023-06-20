// type Product = {
//   id: string
//   name: string
//   images: string[]
//   targetAudiance: string
//   type: string
//   price: number
//   size: "xs" | "s" | "m" | "l" | "xl"
// }

export const dummyProducts: Product[] = [
  {
    id: "01",
    name: "Product 1",
    images: [
      "/dummy_product.png",
      "/dummy_product_female.png",
      "/dummy_product.png",
      "/dummy_product_female.png",
      "/dummy_product.png",
    ],
    targetAudiance: "male",
    type: "sweeter",
    price: 100,
    sizes: ["m", "l", "xl"],
    overview: {
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      carePoints: ['Hand wash using cold water.', 'Do not use bleach.', 'Hang it to dry.']
    }
  },
  {
    id: "02",
    name: "Product 2",
    images: ["/dummy_product.png"],
    targetAudiance: "female",
    type: "sweeter",
    price: 200,
    sizes: ["l", "m"],
    overview: {
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      carePoints: ['Hand wash using cold water.', 'Do not use bleach.', 'Hang it to dry.']
    }
  },
  {
    id: "03",
    name: "Product 3",
    images: ["/dummy_product.png"],
    targetAudiance: "kids",
    type: "sweeter",
    price: 300,
    sizes: ["l", "m"],
    overview: {
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      carePoints: ['Hand wash using cold water.', 'Do not use bleach.', 'Hang it to dry.']
    }
  },
  {
    id: "04",
    name: "Product 4",
    images: ["/dummy_product.png"],
    targetAudiance: "male",
    type: "sweeter",
    price: 400,
    sizes: ["l", "m"],
    overview: {
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      carePoints: ['Hand wash using cold water.', 'Do not use bleach.', 'Hang it to dry.']
    }
  },
  {
    id: "05",
    name: "Product 5",
    images: ["/dummy_product.png"],
    targetAudiance: "female",
    type: "sweeter",
    price: 500,
    sizes: ["l", "m"],
    overview: {
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      carePoints: ['Hand wash using cold water.', 'Do not use bleach.', 'Hang it to dry.']
    }
  },
  {
    id: "06",
    name: "Product 6",
    images: ["/dummy_product.png"],
    targetAudiance: "kids",
    type: "sweeter",
    price: 600,
    sizes: ["l", "m"],
    overview: {
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      carePoints: ['Hand wash using cold water.', 'Do not use bleach.', 'Hang it to dry.']
    }
  },
]