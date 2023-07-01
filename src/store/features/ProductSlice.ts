import { dummyProducts } from "@/constants"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Payload = {
  products?: Product[]
  targetAudiance?: TargetAudiance | "all"
}

const initialState = dummyProducts as Product[]

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(_, action: PayloadAction<Payload>) {
      return action.payload.products
    },
    filterProducts(_, action: PayloadAction<Payload>) {
      if (action.payload.targetAudiance === "all") return initialState
      return initialState.filter(product => product.targetAudiance === action.payload.targetAudiance)
    },
  },
})

export const { setProducts, filterProducts } = slice.actions
export const ProductReducer = slice.reducer
