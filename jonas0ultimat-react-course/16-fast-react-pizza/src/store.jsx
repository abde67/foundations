
import useReducer from "./features/user/userSlice"
import { configureStore } from "@reduxjs/toolkit"
const store=configureStore({
  reducer :{
    user:useReducer,

  },
});
export default store