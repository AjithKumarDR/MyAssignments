import { configureStore } from '@reduxjs/toolkit'
import CartSliceReducer from './CartsSlice'
export default configureStore({
  reducer: {
    blogs:CartSliceReducer
  },
})