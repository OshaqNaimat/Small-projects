import React, { useState } from "react";
import { data } from "../components/Data";

const Lorem = () => {
  const [number, setNumber] = useState("");
  const [lorem, setLorem] = useState([]);

  const generate = (e) => {
    e.preventDefault();

    if (number > data.length) {
      let moredata = [];
      for (let i = 0; i < number; i++) {
        let random = Math.floor(Math.random() * data.length); // random each time
        moredata.push(data[random]);
      }
      setLorem(moredata);
    } else {
      let sliceData = data.slice(0, number);
      setLorem(sliceData);
    }

    setNumber("");
  };

  return (
    <>
      <div className="container mx-auto rounded-md shadow-lg my-5 p-3 shadow-black w-[90%] select-none md:w-1/2 lg:md-1/3">
        <h1 className="text-center text-2xl font-semibold">Lorem generator</h1>
        <form action="">
          <input
            className="w-full border rounded-md outline-0 p-1 "
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            placeholder="e.g 3"
          />
          <button
            onClick={generate}
            className="text-center bg-blue-500 rounded-md p-3 w-full text-white my-3"
          >
            Generate
          </button>
        </form>
      </div>

      <div className="container grid grid-cols-2 gap-5">
        {lorem.map((item, index) => {
          return <p className="text-justify text-gray-500"> {item} </p>;
        })}
      </div>
    </>
  );
};

export default Lorem;
