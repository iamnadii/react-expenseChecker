import { useState } from "react";
import { ExpenseItem, NewExpense, ExpensesFilter, ExpenseChart } from "./components";
import Card from "./components/Card/Card";
import data from "./components/ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(data);
  const addExpenseHandler = (addExpense) => {
    setExpenses((prev) => [addExpense, ...prev]);
  };

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredData = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expense founded.</p>;
  if (filteredData.length > 0) {
    expenseContent = filteredData.map((data) => {
      return <ExpenseItem key={data.id} expense={data} />;
    });
  }
  return (
    <div className="App">
      <NewExpense onaddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredData} />
        {expenseContent}
      </Card>
    </div>
  );
}

export default App;
