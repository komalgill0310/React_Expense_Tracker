import React from "react";

export default function ExpenseDate(props) {
  return (
    <div className="col order-last">
      <label htmlFor="date">Date: </label>

      <input
        id="date"
        type="date"
        name={props.name}
        onChange={props.changeValue}
        value={props.value}
        className="form-control form-select-sm"
        required
      />
    </div>
  );
}
