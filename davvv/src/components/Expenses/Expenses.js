import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // am functionit vpoulob am tu im expenss wlis da mixedvit
  const fileteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesList items={fileteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
