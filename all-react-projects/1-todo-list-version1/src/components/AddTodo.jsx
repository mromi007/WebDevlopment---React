import { useState } from "react";
import {MdOutlineAdd} from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    <div className="container todo-container">
      <div className="row omi-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter toDo here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input type="date"
          value={dueDate} onChange={handleDateChange}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success omi-btn"
            onClick={handleAddButtonClick}
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
