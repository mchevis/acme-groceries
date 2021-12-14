import { createStore, combineReducers } from "redux";
import groceriesReducer from "./reducers/groceriesReducer";
import viewReducer from "./reducers/viewReducer";

const rootReducer = combineReducers({
  groceries: groceriesReducer,
  view: viewReducer,
});

const store = createStore(rootReducer);

export default store;
