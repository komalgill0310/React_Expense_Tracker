import React from "react";
import useForm from "./useForm";
import ExpenseType from "./ExpenseType";
import ExpenseDate from "./ExpenseDate";
import ExpenseName from "./ExpenseName";
import ExpenseAmount from "./ExpenseAmount";

export default function Form({ setTableData }) {
  const {
    formData,
    handleChange,
    clearFormValue,
    addFormDataToTable,
  } = useForm(setTableData);
  return (
    <form className="container m-auto">
      <div className="row">
        <ExpenseType
          name="type"
          changeValue={handleChange}
          value={formData.type}
        />
        <br />
        <ExpenseDate
          name="date"
          changeValue={handleChange}
          value={formData.date}
        />
        <br />
      </div>
      <div className="row">
        <ExpenseName
          name="description"
          changeValue={handleChange}
          value={formData.description}
        />
        <br />
        <ExpenseAmount
          name="amount"
          changeValue={handleChange}
          value={formData.amount}
        />
        <br />
      </div>
      <div className="d-flex justify-content-center align-items-center m-4">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addFormDataToTable();
            clearFormValue();
          }}
          className="btn btn-primary btn-sm active border-0"
        >
          Add a new Expense
        </button>
      </div>
    </form>
  );
}
