import React from "react";
import Header from "./modules/Header";
import Form from "./modules/InputForm";
import Table from "./modules/Table";

import useTable from "./modules/Table/useTable";

export default function App() {
  const { tableData, setTableData, deleteExpense } = useTable();

  return (
    <>
      <Header />
      <Form setTableData={setTableData} />
      <Table tableData={tableData} deleteExpense={deleteExpense} />
    </>
  );
}
