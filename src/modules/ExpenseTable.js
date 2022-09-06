import React from "react";
import DeleteExpense from "./DeleteExpense";

export default function ExpenseTable(props) {
  return (
    <tbody>
      <tr id={props.id} className="table-info">
        <td>{props.expenseType}</td>
        <td>{props.expenseDate}</td>
        <td>{props.expenseName}</td>
        <td>{props.expenseAmount}</td>
        <td>
          <DeleteExpense
            deleteId={props.id}
            handleClick={props.deleteExpense}
          />
        </td>
      </tr>
    </tbody>
  );
}
