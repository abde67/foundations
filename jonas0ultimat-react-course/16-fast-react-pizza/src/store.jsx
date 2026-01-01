
import useReducer from "./features/user/userSlice"
import { configureStore } from "@reduxjs/toolkit"
import cartSlice from './features/cart/cartSlice'
import cartReducer from './features/cart/cartSlice'

const store=configureStore({
  reducer :{
    user:useReducer,
    cart:cartReducer,

  },
});
export default store