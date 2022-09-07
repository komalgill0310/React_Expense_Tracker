import React from "react";
import DeleteExpense from "../DeleteExpense";

export default function Table({ tableData, deleteExpense }) {
  return (
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
        <tbody>
          {tableData.map((expense) => {
            return (
              <tr id={expense.id} key={expense.id} className="table-info">
                <td>{expense.expenseType}</td>
                <td>{expense.expenseDate}</td>
                <td>{expense.expenseName}</td>
                <td>{expense.expenseAmount}</td>
                <td>
                  <DeleteExpense
                    deleteId={expense.id}
                    handleClick={deleteExpense}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
