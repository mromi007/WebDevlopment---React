import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemss from "./components/TodoItemss";

function App() {

  const todoItemss = [ 
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
      id:1,
    },
    {
      name: "Goto College",
      dueDate: "5/10/2023",
      id:2,
    },
    {
      name: "Return from College",
      dueDate: "5/10/2023",
      id:3,
    },
  ]

  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItemss todoItemss = {todoItemss} />
      
    </center>
  );
}

export default App;
