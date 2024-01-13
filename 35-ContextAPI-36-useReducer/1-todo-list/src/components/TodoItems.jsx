import { TodoItemsContext } from "../store/todo-items.store";
import {useContext} from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";


const TodoItems = ({ onDeleteClick }) => { 

  const {todoItems, deleteItem} = useContext(TodoItemsContext);


  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          deleteItem={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;