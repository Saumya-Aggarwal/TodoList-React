import TodoItems from "./todoItems";
function TaskList({tasks,onDeleteClicked}) {
  // const {tasks} = props; //can also be done as previous chapter like props.tasks
  function printTasks(task,index) {
    return <TodoItems todoItem={task.name} todoDate={task.date} key ={index} onDeleteClicked={onDeleteClicked}></TodoItems>;
  }
  return (
    <>
      <div className="task-container">{tasks.map(printTasks)}</div>
    </>
  );
}
export default TaskList;
