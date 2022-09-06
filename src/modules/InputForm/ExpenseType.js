import React from "react";

export default function ExpenseType({name, changeValue, value}) {
  return (
    <div className="col me-auto">
      <label htmlFor="payment-type">Type:</label>

      <select
        id="payment-type"
        name={name}
        onChange={changeValue}
        value={value}
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
