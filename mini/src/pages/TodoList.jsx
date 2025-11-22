import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setList([...list, task]);
    setTask("");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">To-Do List</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border px-3 py-2"
          placeholder="Enter task"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul className="mt-4">
        {list.map((t, i) => (
          <li key={i} className="p-2 border-b">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
