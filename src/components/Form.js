import React from "react";
import ExpenseType from "./ExpenseType";
import ExpenseDate from "./ExpenseDate";
import ExpenseName from "./ExpenseName";
import ExpenseAmount from "./ExpenseAmount";

export default function Form(props) {
  return (
    <form className="container m-4 form-group row">
      <div className="row">
        <ExpenseType
          name="type"
          changeValue={props.handleChange}
          value={props.value.type}
        />
        <br />
        <ExpenseDate
          name="date"
          changeValue={props.handleChange}
          value={props.value.date}
        />
        <br />
      </div>
      <div className="row">
        <ExpenseName
          name="description"
          changeValue={props.handleChange}
          value={props.value.description}
        />
        <br />
        <ExpenseAmount
          name="amount"
          changeValue={props.handleChange}
          value={props.value.amount}
        />
        <br />
      </div>
    </form>
  );
}
