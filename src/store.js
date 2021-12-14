import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import groceriesReducer from "./reducers/groceriesReducer";
import viewReducer from "./reducers/viewReducer";

const UPDATE = "UPDATE";

//thunk action creators
export const toggleSwitch = (grocery) => {
  return async (dispatch) => {
    try {
      const updated = (
        await axios.put(`/api/groceries/${grocery.id}`, {
          purchased: !grocery.purchased,
        })
      ).data;
      dispatch({ type: UPDATE, grocery: updated });
    } catch (err) {
      console.log(err);
    }
  };
};

export const create = () => {
  return async () => {
    try {
      const grocery = (await axios.post("/api/groceries/random")).data;
      dispatch({ type: "CREATE", grocery });
    } catch (err) {
      console.log(err);
    }
  };
};

const rootReducer = combineReducers({
  groceries: groceriesReducer,
  view: viewReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);

export default store;
