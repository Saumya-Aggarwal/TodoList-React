import { useRef, useState } from "react";

function AddTodo({ HandleNewItem }) {
  // const [todoName, setTodoName] = useState("");

  // const [dueDate, setDueDate] = useState("");
  const todoName = useRef();
  const dueDate = useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };
  function handleAddButtonClicked() {
    HandleNewItem(todoName.current.value, dueDate.current.value);
    todoName.current.value = "";
    dueDate.current.value= "";
    // setDueDate("");
    // setTodoName("");
  }
  return (
    <div className=" container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={todoName}
            placeholder="Enter your task here..."
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDate}
          // onChange={handleDateChange} 
          // value={dueDate} 
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
