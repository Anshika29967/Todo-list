import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, toggleTask, deleteTask, startEditing, editTask, editingTask, editText, setEditText }) {
  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} startEditing={startEditing} editTask={editTask} editingTask={editingTask} editText={editText} setEditText={setEditText} />
      ))}
    </ul>
  );
}

export default ToDoList;
