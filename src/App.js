import ExpenseItem from "./components/ExpenseItem";
import DisplayHeader from "./components/Header";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 1, 15),
    },
    {
      id: "e2",
      title: "Dog Insurance",
      amount: 60,
      date: new Date(2021, 1, 28),
    },
    {
      id: "e3",
      title: "Mobile Phone",
      amount: 22,
      date: new Date(2021, 2, 8),
    },
    {
      id: "e4",
      title: "Entertainment",
      amount: 5000,
      date: new Date(2021, 3, 28),
    },
  ];

  return (
    <div>
      <DisplayHeader></DisplayHeader>
      <h2>Let's get started!!!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
