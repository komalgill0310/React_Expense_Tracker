import React from "react";

export default function ExpenseType(props) {
  return (
    <div className="col me-5">
      <label htmlFor="payment-type">Type:</label>

      <select
        id="payment-type"
        name={props.name}
        onChange={props.changeValue}
        value={props.value}
        className="form-select form-select-sm"
        required
      >
        <option value="">--Choose--</option>
        <option value="card">Card</option>
        <option value="cash">Cash</option>
        <option value="cryptocoin">Cryptocoin</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
