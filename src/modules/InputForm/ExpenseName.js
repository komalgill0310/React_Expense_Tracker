import React from "react";

export default function ExpenseName(props) {
  return (
    <div className="col mt-auto">
      <label htmlFor="expense-name">Name: </label>
        <input
          id="expense-name"
          type="text"
          placeholder="What did you spend on?"
          name={props.name}
          onChange={props.changeValue}
          value={props.value}
          className="form-control form-select-sm"
          required
        />
      </div>
  );
}
