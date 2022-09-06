import React from "react";

export default function ExpenseName({name, changeValue, value}) {
  return (
    <div className="col mt-auto">
      <label htmlFor="expense-name">Name: </label>
        <input
          id="expense-name"
          type="text"
          placeholder="What did you spend on?"
          name={name}
          onChange={changeValue}
          value={value}
          className="form-control form-select-sm"
          required
        />
      </div>
  );
}
