function AddTodo() {
  return (
    <div class="container todo-container">
    <div class="row omi-row">
      <div class="col-6">
        <input type="text" placeholder="Enter toDo here"></input>
      </div>
      <div class="col-4">
        <input type="date"></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success omi-btn">
          Add
        </button>
      </div>
    </div>
    </div>
  );
}

export default AddTodo;
