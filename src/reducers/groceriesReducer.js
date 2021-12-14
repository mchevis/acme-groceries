//action constants
const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";

// intial state
const initialState = {
  all: [],
};

//reducer
const groceriesReducer = (state = initialState, action) => {
  if (action.type === LOAD) {
    state = { ...state, all: action.groceries };
  }
  if (action.type === UPDATE) {
    console.log(state);
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
  return state;
};

export default groceriesReducer;
