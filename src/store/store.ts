import {configureStore} from "@reduxjs/toolkit"
import { CartReducer, ProductReducer } from "./features"
import { TypedUseSelectorHook, useSelector } from "react-redux"

const localStorageKey = "reduxPersistedState"

const serializeState = (state: RootState) => JSON.stringify(state)
const deserializeState = (serializedState:string) => JSON.parse(serializedState)

const persistedState = localStorage.getItem(localStorageKey)
const preloadedState = persistedState ? deserializeState(persistedState) : undefined


export const store = configureStore({
  reducer: {
    ProductReducer,
    CartReducer    
  },
  preloadedState
})

store.subscribe(() => {
  const state = store.getState()
  const serializedState = serializeState(state)
  localStorage.setItem(localStorageKey, serializedState)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector