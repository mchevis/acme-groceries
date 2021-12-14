import axios from "axios";

//action constants
const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE_GROCERY = "DELETE_GROCERY";

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
  return async (dispatch) => {
    const grocery = (await axios.post("/api/groceries/random")).data;
    dispatch({ type: "CREATE", grocery });
  };
};

export const deleteGrocery = (grocery) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/groceries/${grocery.id}`);
      dispatch({ type: "DELETE_GROCERY", grocery });
    } catch (err) {
      console.log(err);
    }
  };
};

// intial state --- could be just an array if it's simple
const initialState = {
  all: [],
};

//reducer
const groceriesReducer = (state = initialState, action) => {
  if (action.type === LOAD) {
    state = { ...state, all: action.groceries };
  }
  if (action.type === UPDATE) {
    state = {
      ...state,
      all: state.all.map((grocery) =>
        grocery.id === action.grocery.id ? action.grocery : grocery
      ),
    };
  }
  if (action.type === CREATE) {
    state = { ...state, all: [...state.all, action.grocery] };
  }
  if (action.type === DELETE_GROCERY) {
    state = {
      ...state,
      all: state.all.filter((grocery) => grocery.id !== action.grocery.id),
    };
  }
  return state;
};

export default groceriesReducer;
