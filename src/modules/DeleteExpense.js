import React from "react";

export default function DeleteExpense({ handleClick, deleteId }) {
  const iconStyle = {
    color: "red",
    cursor: "pointer",
  };

  return (
    <i
      style={iconStyle}
      className="bi-trash"
      onClick={() => handleClick(deleteId)}
    ></i>
  );
}
