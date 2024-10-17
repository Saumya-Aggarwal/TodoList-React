import AppName from "./components/appName";
import AddTodo from "./components/addTodo";
import TaskList from "./components/taskList";
import ZeroTasks from "./components/zeroTasks";
import "./App.css";
import { useState } from "react";

function App() {
  const PrintNewItem = (itemValue, dueDate)=>{
    console.log(itemValue, dueDate)
    const tasks=[...Tasks, {name: itemValue, date: dueDate}];
    setNewTasks(tasks);
  }
  const deleteTask = (taskName)=>{
  console.log(Tasks);
  const tasks = Tasks.filter((item)=>{return item.name !== taskName})
  setNewTasks(tasks);
  }
  const initialTasks =[]
  const [Tasks, setNewTasks]= useState(initialTasks); 
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo HandleNewItem={PrintNewItem}></AddTodo>
      {Tasks.length === 0 ? <ZeroTasks></ZeroTasks> : <TaskList tasks ={Tasks} onDeleteClicked={deleteTask}></TaskList>}
    </center>
  );
}

export default App;
