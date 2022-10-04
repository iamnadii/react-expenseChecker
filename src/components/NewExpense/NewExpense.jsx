import React, { useState } from "react";

import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isaddingExpense, setIsAddingExpense] = useState(false);

  const startExpenseHandler = () => {
    return setIsAddingExpense(true);
  };
  const stopExpenseHandler = () => {
    return setIsAddingExpense(false);
  };

  const saveExpenseHandler = (saveExpense) => {
    props.onaddExpense(saveExpense);
  };
  return (
    <div className="new-expense">
      {isaddingExpense ? (
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} onStopExpense={stopExpenseHandler} />
      ) : (
        <button onClick={startExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
