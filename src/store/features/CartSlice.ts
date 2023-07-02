import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import toast from 'react-hot-toast'

type Payload = {
  item?: CartItem
  id?: string
}

const initialState: CartItem[] = []

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Payload>) {
      if (action.payload.item) {
        const items = state.filter(item => item.id === action.payload.item?.id)
        const item = items.find(item => item.size === action.payload.item?.size)
        if (item) { 
          if(item.size !== action.payload.item.size) {
            state.push(action.payload.item)
            toast.success("Product Successfully Added to Cart", { position: "bottom-center" })
          } else {
            toast.error("Product is already present in the Cart", { position: "bottom-center" })
            
          }
        } else {
          state.push(action.payload.item)
          toast.success("Product Successfully Added to Cart", { position: "bottom-center" })
        }
      }
    },
    deleteFromCart(state, action: PayloadAction<Payload>) {
      const index = state.findIndex(item => item.id === action.payload.id)
      state.splice(index, 1)
    },
    increaseCount(state, action: PayloadAction<Payload>) {
      const index = state.findIndex(item => item.id === action.payload.id)
      const newItem = {
        ...state[index],
        quantity: state[index].quantity === 900 ? 900 : state[index].quantity + 1,
      }
      state.splice(index, 1, newItem)
    },
    decreaseCount(state, action: PayloadAction<Payload>) {
      const index = state.findIndex(item => item.id === action.payload.id)
      const newItem = {
        ...state[index],
        quantity: state[index].quantity === 1 ? 1 : state[index].quantity - 1,
      }
      state.splice(index, 1, newItem)
    },
  },
})

export const { addToCart, deleteFromCart, increaseCount, decreaseCount } = slice.actions
export const CartReducer = slice.reducer
