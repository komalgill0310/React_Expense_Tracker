import { useState, useEffect } from "react";

export default function useTable() {
  const [tableData, setTableData] = useState(
    () => JSON.parse(localStorage.getItem("tableData")) || []
  );

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);

  function deleteExpense(deleteId) {
    setTableData((prevTableData) =>
      prevTableData.filter((eachTableRow) => eachTableRow.id !== deleteId)
    );
  }

  return {
    tableData,
    setTableData,
    deleteExpense,
  };
}
