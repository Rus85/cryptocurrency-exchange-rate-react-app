import { configureStore } from "@reduxjs/toolkit"
import inputs from './coinsSlices'
import userReducer from './userSlice'


const store = configureStore({
    reducer: {
      coinsInput: inputs,
      user: userReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store