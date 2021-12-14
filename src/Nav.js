import React from "react";
import { connect } from "react-redux";

const Nav = ({ groceries, view }) => {
  const needs = groceries.all.filter((grocery) => !grocery.purchased);
  const purchased = groceries.all.filter((grocery) => grocery.purchased);
  return (
    <nav>
      <a href="#" className={!view.selected ? "selected" : ""}>
        All ({groceries.all.length})
      </a>
      <a href="#needs" className={view.selected === "needs" ? "selected" : ""}>
        Needs ({needs.length})
      </a>
      <a
        href="#purchased"
        className={view.selected === "purchased" ? "selected" : ""}
      >
        Purchased ({purchased.length})
      </a>
    </nav>
  );
};

export default connect((state) => state)(Nav);
