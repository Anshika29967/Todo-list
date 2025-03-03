function ToDoItem({ task, toggleTask, deleteTask, startEditing, editTask, editingTask, editText, setEditText }) {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 my-1 rounded">
      {editingTask === task.id ? (
        <>
          <input
            className="border p-1"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="bg-green-500 text-white p-1 ml-2" onClick={() => editTask(task.id)}>Save</button>
        </>
      ) : (
        <span
          className={task.completed ? "line-through cursor-pointer" : "cursor-pointer"}
          onClick={() => toggleTask(task.id)}
        >
          {task.text}
        </span>
      )}
      <div>
        <button className="bg-yellow-500 text-white p-1 mx-1" onClick={() => startEditing(task)}>Edit</button>
        <button className="bg-red-500 text-white p-1" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;

