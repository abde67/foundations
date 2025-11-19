import { type } from "@testing-library/user-event/dist/type";
import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerRducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payLoad.fullName,
        nationalID: action.payLoad.nationalID,
        createdAt: action.payLoad.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payLoad };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerRducer,
});
const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 1000 });

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(1000));
store.dispatch(withdraw(500));

store.dispatch(requestLoan(10000, "Buy a car"));

store.dispatch(payLoan());

function CreateCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payLoad: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payLoad: fullName };
}

store.dispatch(CreateCustomer("John Doe", "123456789"));
console.log(store.getState());
