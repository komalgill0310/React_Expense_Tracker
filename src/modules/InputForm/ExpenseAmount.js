import React from "react";

export default function ExpenseAmount({name, changeValue, value}) {
  return (
    <div className="col order-last mt-4 ms-auto">
      <label htmlFor="expense-amount">Amount: </label>
      <input
        id="expense-amount"
        type="number"
        placeholder="How much?"
        name={name}
        onChange={changeValue}
        value={value}
        className="form-control form-select-sm"
        required
      />
    </div>
  );
}
