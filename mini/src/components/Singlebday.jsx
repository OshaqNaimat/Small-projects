import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const Singlebday = ({ id, name, img, age, remove }) => {
  return (
    <>
      <div className="flex justify-between items-center my-3">
        <div className="flex items-center gap-3">
          <img
            className="rounded-full object-fit-cover w-[60px] h-[60px] "
            src={img}
            alt=""
          />
          <div className="">
            <h4 className="text-xl">{name}</h4>
            <p className="text-gray-500">{age} age years old</p>
          </div>
        </div>

        <button
          onClick={() => remove(id)}
          className="bg-red-500 p-2 rounded-md hover:bg-red-600 cursor-pointer active:scale-90 duration-200 "
        >
          <FaTrashAlt />
        </button>
      </div>
    </>
  );
};

export default Singlebday;
