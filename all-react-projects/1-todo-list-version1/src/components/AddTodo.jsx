function AddTodo() {
  return (
    <div className="container todo-container">
    <div className="row omi-row">
      <div className="col-6">
        <input type="text" placeholder="Enter toDo here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success omi-btn">
          Add
        </button>
      </div>
    </div>
    </div>
  );
}

export default AddTodo;
