import {configureStore} from "@reduxjs/toolkit"
import { CartReducer, ProductReducer } from "./features"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    ProductReducer,
    CartReducer    
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector