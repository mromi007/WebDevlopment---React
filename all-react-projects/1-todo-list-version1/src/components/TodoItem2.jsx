function TodoItem2() {
  let todoName = "Goto College";
  let todoDate = "5/10/2023";
  return (
    <div class="container">
      <div class="row omi-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger omi-btn">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;