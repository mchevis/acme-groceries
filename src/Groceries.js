import React from "react";
import {
  toggleSwitch,
  create,
  deleteGrocery,
} from "./reducers/groceriesReducer";

import { connect } from "react-redux";

const _Groceries = ({ groceries, view, toggle, create, deleteGrocery }) => {
  return (
    <div>
      <button onClick={create}>Create</button>
      <ul>
        {groceries.all
          .filter(
            (grocery) =>
              !view.selected ||
              (grocery.purchased && view.selected === "purchased") ||
              (!grocery.purchased && view.selected === "needs")
          )
          .map((grocery) => {
            return (
              <div key={grocery.id}>
                <li
                  onClick={() => toggle(grocery)}
                  className={grocery.purchased ? "purchased" : ""}
                >
                  {grocery.name}
                </li>
                <button onClick={() => deleteGrocery(grocery)}> x </button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (grocery) => dispatch(toggleSwitch(grocery)),
    create: () => dispatch(create()),
    deleteGrocery: (grocery) => dispatch(deleteGrocery(grocery)),
  };
};

const Groceries = connect((state) => state, mapDispatchToProps)(_Groceries);

export default Groceries;
