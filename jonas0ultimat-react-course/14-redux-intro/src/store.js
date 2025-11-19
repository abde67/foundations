import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerRducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@reduxjs/toolkit/devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerRducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
