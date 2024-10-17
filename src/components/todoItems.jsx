function TodoItems(props) {
  const todo = props.todoItem;
  const date = props.todoDate;
  const onDeleteClicked = props.onDeleteClicked;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>{todo}</p>
          </div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button className="btn btn-danger" onClick={()=>{onDeleteClicked(todo)}}>delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItems;
