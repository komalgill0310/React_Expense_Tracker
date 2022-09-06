import React from "react";
import ExpenseType from "./ExpenseType";
import ExpenseDate from "./ExpenseDate";
import ExpenseName from "./ExpenseName";
import ExpenseAmount from "./ExpenseAmount";

export default function Form({ handleChange, value }) {
  return (
    <form className="container m-auto">
      <div className="row">
        <ExpenseType
          name="type"
          changeValue={handleChange}
          value={value.type}
        />
        <br />
        <ExpenseDate
          name="date"
          changeValue={handleChange}
          value={value.date}
        />
        <br />
      </div>
      <div className="row">
        <ExpenseName
          name="description"
          changeValue={handleChange}
          value={value.description}
        />
        <br />
        <ExpenseAmount
          name="amount"
          changeValue={handleChange}
          value={value.amount}
        />
        <br />
      </div>
    </form>
  );
}
