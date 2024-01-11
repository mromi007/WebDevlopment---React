import TodoItem from "./TodoItem";
import styles from './TodoItemss.module.css'

const TodoItemss = ({ todoItemss }) => {
  return (
    <>
      <div className={styles.todoContainer}>
      {todoItemss.map((item) => (
          <TodoItem key={item} todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItemss;
