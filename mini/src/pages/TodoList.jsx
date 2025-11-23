import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleItem from "../components/ToDoComponents";

const Input = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  // Load data from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setData(JSON.parse(stored));
  }, []);

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  const addData = (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      toast.error("Please enter a value");
      return;
    }
    const newItem = { id: Date.now(), name }; // unique id
    setData([...data, newItem]);
    setName("");
    setError(false);
    toast.success("Data added successfully");
  };

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    toast.success("Deleted");
  };

  const updateItem = (id, newName) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
    toast.success("Updated");
  };

  return (
    <>
      <div className="container w-[90%] md:w-1/2 lg:w-1/3 mx-auto p-5 shadow-lg shadow-gray-500 rounded-md">
        <form>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full shadow-lg p-3 rounded-md focus:border-green-500"
            placeholder="Add your name..."
          />
          {error && (
            <p className="text-red-500 text-sm font-semibold">
              Please enter a value
            </p>
          )}
          <button
            onClick={addData}
            className="w-full bg-blue-500 p-3 mt-5 active:scale-90 hover:bg-blue-800 cursor-pointer duration-300 text-white rounded-md"
          >
            Add data
          </button>
        </form>
      </div>

      <div className="container mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <SingleItem
            key={item.id}
            id={item.id}
            single={item}
            remove={remove}
            updateItem={updateItem}
          />
        ))}
      </div>
    </>
  );
};

export default Input;
