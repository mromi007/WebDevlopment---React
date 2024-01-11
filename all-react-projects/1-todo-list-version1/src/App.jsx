import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemss from "./components/TodoItemss";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMsg";

function App() {
  const initialTodoItemss = [];

  const [todoItemss, setTodoItemss] = useState(initialTodoItemss);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItemss,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItemss(newTodoItems);
  };

  const todoDelete = (todoItemName) => {
    const newTodoItems = todoItemss.filter(item => item.name !== todoItemName);
    setTodoItemss(newTodoItems);
    };

  return (
    <center>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItemss.length === 0 && <WelcomeMessage> </WelcomeMessage>}
      <TodoItemss 
        todoItemss={todoItemss} 
        onDeleteClick={todoDelete} 
      ></TodoItemss>
    </center>
  );
}

export default App;
