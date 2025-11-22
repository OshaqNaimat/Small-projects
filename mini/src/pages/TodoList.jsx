import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleItem from "../components/ToDoComponents";

const Input = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const addData = (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      toast.error("Please enter a value");
    } else {
      console.log(name);
      setError(false);
      setName("");
      setData([...data, name]);
      toast.success("Data added successfully");
    }
  };

  useEffect(() => {
    if (name.length > 0) {
      setError(false);
    }
  }, [name]);
  return (
    <>
      <div className="container w-[90%] md:w-1/2 lg:w-1/3 mx-auto p-5 shadow-lg">
        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full shadow-2xl p-3 rounded-md outline-0 border-gray-500 focus:border-green-500 "
            placeholder="Add your name ...."
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
            Add Data
          </button>
        </form>
      </div>

      <div className="container mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item, index) => {
          return <SingleItem key={index} single={item} />;
        })}
      </div>
    </>
  );
};

export default Input;
