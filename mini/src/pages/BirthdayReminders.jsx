import React, { useState } from "react";
import Singlebday from "./Singlebday";
import { bday } from "./Data";
import { FaTrashAlt } from "react-icons/fa";

const Birthday = () => {
  const [data, setData] = useState(bday);

  const removeData = (id) => {
    let newPeople = data.filter((item, index) => {
      return item.id !== id;
    });

    setData(newPeople);
  };

  return (
    <>
      <div className="w-[90%] shadow-blue-500 sm:w-[70%] md:w-[60%] lg:w-[35%] shadow-2xl rounded-md mx-auto p-5 my-5">
        <h1 className="text-center text-4xl">{data.length} Birthdays Today</h1>

        {data.map((item, index) => {
          return <Singlebday remove={removeData} {...item} key={index} />;
        })}
        <button
          className={`${
            data.length == 0
              ? "bg-green-500 hover:bg-green-500"
              : "bg-red-500 hover:bg-red-600"
          } cursor-pointer active:scale-90  w-full
              p-2 rounded-md text-white duration-200 select-none`}
          type="button"
          onClick={data.length == 0 ? () => setData(info) : () => setData([])}
        >
          {data.length == 0 ? "Refresh All" : "Remove All"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
