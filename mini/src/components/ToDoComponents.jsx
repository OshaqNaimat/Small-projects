import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const SingleItem = ({ single, remove, id, updateItem }) => {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(single.name);

  return (
    <div className="container flex justify-between items-center shadow-lg shadow-cyan-500 p-3 mt-5 rounded-md">
      {edit ? (
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border p-1 rounded"
        />
      ) : (
        <p>{single.name}</p>
      )}

      <div className="flex gap-3">
        {edit ? (
          <FaSave
            className="cursor-pointer"
            onClick={() => {
              updateItem(id, newName);
              setEdit(false);
            }}
          />
        ) : (
          <FaEdit className="cursor-pointer" onClick={() => setEdit(true)} />
        )}

        <FaTrash className="cursor-pointer" onClick={() => remove(id)} />
      </div>
    </div>
  );
};

export default SingleItem;
