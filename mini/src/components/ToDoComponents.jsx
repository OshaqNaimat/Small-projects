import React from "react";
import { FaTrash } from "react-icons/fa";

const SignleItem = ({ single, remove }) => {
  return (
    <div className="container flex justify-between shadow-lg shadow-cyan-500 p-3 mt-5 rounded-md ">
      {single}
      <FaTrash />
    </div>
  );
};

export default SignleItem;
