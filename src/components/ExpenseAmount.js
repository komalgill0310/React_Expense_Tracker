import React from "react";

export default function ExpenseAmount(props) {
  return (
    <div className="col order-last mt-4 ms-5">
      <label htmlFor="expense-amount">Amount: </label>
      <input
        id="expense-amount"
        type="number"
        placeholder="How much?"
        name={props.name}
        onChange={props.changeValue}
        value={props.value}
        className="form-control form-select-sm"
        required
      />
    </div>
  );
}
