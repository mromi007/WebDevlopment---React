import TodoItem from "./TodoItem";

const TodoItemss = ({ todoItemss }) => {
  return (
    <>
      <div className="todo-container">
      {todoItemss.map((item) => (
          <TodoItem key={item} todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItemss;
