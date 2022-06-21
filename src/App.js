import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Form from "./components/Form";
import ExpenseTable from "./components/ExpenseTable";

export default function App() {
  const [formData, setFormData] = useState({
    id: nanoid(),
    type: "",
    date: "",
    description: "",
    amount: "",
  });

  const [tableData, setTableData] = useState(
    () => JSON.parse(localStorage.getItem("tableData")) || []
  );

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        id: nanoid(),
        [event.target.name]: event.target.value,
      };
    });
  }

  function addDataToTable(event) {
    event.preventDefault();

    if (
      formData.type === "" ||
      formData.data === "" ||
      formData.description === "" ||
      formData.amount === ""
    ) {
      alert("Plese fill out the required fields");
    } else {
      const tableCellData = {
        rowId: formData.id,
        expenseType: formData.type,
        expenseDate: formData.date,
        expenseName: formData.description,
        expenseAmount: formData.amount,
      };
      setTableData([...tableData, tableCellData]);
      setFormData({
        type: "",
        date: "",
        description: "",
        amount: "",
      });
    }
  }

  function deleteExpense(event, deleteId) {
    event.preventDefault();

    setTableData((prevTableData) =>
      prevTableData.filter((eachTableRow) => eachTableRow.rowId !== deleteId)
    );
  }

  const tableElements = tableData.map((eachTableData) => {
    return (
      <ExpenseTable
        key={nanoid()}
        id={eachTableData.rowId}
        expenseType={eachTableData.expenseType}
        expenseDate={eachTableData.expenseDate}
        expenseName={eachTableData.expenseName}
        expenseAmount={eachTableData.expenseAmount}
        deleteExpense={deleteExpense}
      />
    );
  });
  return (
    <>
      <Header />
      <Form value={formData} handleChange={handleChange} />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="submit"
          onClick={addDataToTable}
          className="btn btn-primary btn-sm active border-0"
        >
          Add a new Expense
        </button>
      </div>
      <div className="table-responsive-sm">
        <table className="table table-bordered table-dark table-hover table-sm mt-4">
          <thead className="thead-dark">
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>What did you spend on?</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          {tableElements}
        </table>
      </div>
    </>
  );
}
