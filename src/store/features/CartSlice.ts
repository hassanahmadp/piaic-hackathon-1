import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
        const index = state.findIndex(item => item.id === action.payload.item?.id)
        if (index >= 0) {
          const newItem = {
            ...state[index],
            quantity: state[index].quantity + action.payload.item?.quantity,
          }
          state.splice(index, 1, newItem)
        } else state.push(action.payload.item)
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
