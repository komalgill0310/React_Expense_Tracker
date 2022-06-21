import React from "react";

export default function DeleteExpense(props) {
  const iconStyle = {
    color: "red"
  }
  return (

    // <button className="border-0" onClick={(event) => props.handleClick(event, props.deleteId)}>
     <i  style={iconStyle} class="bi-trash"  onClick={(event) => props.handleClick(event, props.deleteId)}></i>
    // </button>
  );
}
