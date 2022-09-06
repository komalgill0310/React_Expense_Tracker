import React from "react";

export default function ExpenseDate({name, changeValue, value}) {
  return (
    <div className="col order-last">
      <label htmlFor="date">Date: </label>

      <input
        id="date"
        type="date"
        name={name}
        onChange={changeValue}
        value={value}
        className="form-control form-select-sm"
        required
      />
    </div>
  );
}
