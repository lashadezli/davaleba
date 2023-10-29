import React from "react";

import ExpreseItem from "./Expenselitem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expeneses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expeneses-list">
      {props.items.map((expense) => (
        <ExpreseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
