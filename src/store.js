import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import groceriesReducer from "./reducers/groceriesReducer";
import viewReducer from "./reducers/viewReducer";

const rootReducer = combineReducers({
  groceries: groceriesReducer,
  view: viewReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);

export default store;
