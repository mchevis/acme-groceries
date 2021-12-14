const initialState = {
  selected: "",
};
const viewReducer = (state = initialState, action) => {
  if (action.type === "SET_VIEW") {
    state = { ...state, selected: action.view };
  }
  return state;
};

export default viewReducer;
