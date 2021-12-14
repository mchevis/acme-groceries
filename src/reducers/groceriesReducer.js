const initialState = {
  all: [],
};

const groceriesReducer = (state = initialState, action) => {
  if (action.type === "LOAD") {
    state = { ...state, all: action.groceries };
  }
  if (action.type === "UPDATE") {
    state = {
      ...state,
      all: state.groceries.all.map((grocery) =>
        grocery.id === action.grocery.id ? action.grocery : grocery
      ),
    };
  }
  if (action.type === "CREATE") {
    state = { ...state, all: [...state.groceries.all, action.grocery] };
  }
  return state;
};

export default groceriesReducer;
