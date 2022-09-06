import React, { useState, useEffect } from "react";
import Header from "./modules/Header";
import Form from "./modules/InputForm/Form";
import ExpenseTable from "./modules/ExpenseTable";

export default function App() {
  const [tableData, setTableData] = useState(
    () => JSON.parse(localStorage.getItem("tableData")) || []
  );

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);

  function deleteExpense(event, deleteId) {
    event.preventDefault();

    setTableData((prevTableData) =>
      prevTableData.filter((eachTableRow) => eachTableRow.rowId !== deleteId)
    );
  }

  const tableElements = tableData.map((eachTableData) => {
    return (
      <ExpenseTable
        key={eachTableData.rowId}
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
      <Form setTableData={setTableData} />

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
