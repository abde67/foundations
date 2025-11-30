import accountReducer from "./features/accounts/accountSlice";
import customerRducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerRducer,
  },
});
export default store;
