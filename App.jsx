import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

  const editTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: editText } : task));
    setEditingTask(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-md bg-white p-4 rounded shadow">
        <input
          className="border p-2 w-full"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="bg-blue-500 text-white p-2 w-full mt-2" onClick={addTask}>Add Task</button>
        <ToDoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} startEditing={startEditing} editTask={editTask} editingTask={editingTask} editText={editText} setEditText={setEditText} />
      </div>
    </div>
  );
}

export default App;
