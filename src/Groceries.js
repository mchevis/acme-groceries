import React from "react";
import { toggleSwitch, create } from "./store";

import { connect } from "react-redux";

const _Groceries = ({ groceries, view, toggle, create }) => {
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
              <li
                onClick={() => toggle(grocery)}
                key={grocery.id}
                className={grocery.purchased ? "purchased" : ""}
              >
                {grocery.name}
              </li>
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
  };
};

const Groceries = connect((state) => state, mapDispatchToProps)(_Groceries);

export default Groceries;
