import { useState } from "react";
import { nanoid } from "nanoid";

export default function useForm(setTableData) {
  const [formData, setFormData] = useState({
    id: nanoid(),
    type: "",
    date: "",
    description: "",
    amount: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        id: nanoid(),
        [event.target.name]: event.target.value,
      };
    });
  }

  function clearFormValue() {
    setFormData({
      type: "",
      date: "",
      description: "",
      amount: "",
    });
  }

  function isAllFormDataPresent(formData) {
    const { type, data, description, amount } = formData;
    return type === "" || data === "" || description === "" || amount === ""
      ? true
      : false;
  }

  function addFormDataToTable() {
    if (isAllFormDataPresent(formData)) {
      alert("Plese fill out the required fields");
    } else {
      const tableCellData = {
        rowId: formData.id,
        expenseType: formData.type,
        expenseDate: formData.date,
        expenseName: formData.description,
        expenseAmount: formData.amount,
      };
      setTableData((prevState) => [...prevState, tableCellData]);
    }
  }

  return {
    formData,
    handleChange,
    clearFormValue,
    addFormDataToTable,
  };
}
