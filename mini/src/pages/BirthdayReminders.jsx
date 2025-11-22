import { useState } from "react";

export default function BirthdayReminders() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);

  const addBirthday = () => {
    if (!name || !date) return;
    setList([...list, { name, date }]);
    setName("");
    setDate("");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Birthday Reminders</h1>

      <div className="flex flex-col gap-2 w-64">
        <input
          type="text"
          placeholder="Name"
          className="border px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          className="border px-3 py-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          onClick={addBirthday}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Add Reminder
        </button>
      </div>

      <ul className="mt-4">
        {list.map((b, i) => (
          <li key={i} className="p-2 border-b flex justify-between">
            <span>{b.name}</span>
            <span>{b.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
