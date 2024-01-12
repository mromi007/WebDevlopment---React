import TodoItem from "./TodoItem";
import styles from "./TodoItemss.module.css";

const TodoItemss = ({ todoItemss, onDeleteClick }) => {
  return (
    <>
      <div className={styles.todoContainer}>
        {todoItemss.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItemss;
