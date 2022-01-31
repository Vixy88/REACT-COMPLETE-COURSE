import ExpenseItem from "./components/ExpenseItem";
import DisplayHeader from "./components/Header";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new DataTransfer(2021, 1, 15),
    },
    {
      id: "e2",
      title: "Dog Insurance",
      amount: 60,
      date: new DataTransfer(2021, 1, 28),
    },
    {
      id: "e3",
      title: "Mobile Phone",
      amount: 22,
      date: new DataTransfer(2021, 2, 08),
    },
    {
      id: "e4",
      title: "Entertainment",
      amount: 5000,
      date: new DataTransfer(2021, 3, 28),
    },
  ];

  return (
    <div>
      <DisplayHeader></DisplayHeader>
      <h2>Let's get started!!!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
