import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const [colorvalue, setColorvalue] = useState("");
  const [mycolor, setMycolor] = useState("");
  const [list, setList] = useState([]);
  const [bg, setBg] = useState("");
  const handleColorChange = (e) => {
    e.preventDefault();
    try {
      setMycolor(colorvalue);
      const myColorList = new Values(colorvalue).all(10);
      console.log(myColorList);
      setList(myColorList);
    } catch (error) {
      toast.error("Invalid Color");
    }
  };
  return (
    <div
      style={{ background: bg }}
      className="min-h-screen w-full  p-8 transition-colors duration-1000"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <div
        style={{
          boxShadow: `${mycolor} 0px 15px 25px, ${mycolor} 0px 5px 10px`,
        }}
        className={`
    container
     mx-auto
     w-[90%]
     md:w-1/2
     lg:w-1/3
     shadow-lg
     rounded-md
     bg-white
     p-3
     select-none
      `}
      >
        <h1
          style={{ color: mycolor }}
          className="text-center text-2xl font-semibold"
        >
          Color Generator
        </h1>
        <input
          value={colorvalue}
          onChange={(e) => setColorvalue(e.target.value)}
          type="text"
          placeholder="e.g. red,blue"
          className="w-full outline-0 border p-1 rounded-md  border-[2px]"
        />
        <button
          style={{ backgroundColor: mycolor }}
          onClick={handleColorChange}
          className="my-2 outline-none select-none text-center bg-black active:scale-90  text-white font-semibold w-full rounded-md p-1 cursor-pointer duration-200"
        >
          Generate
        </button>
      </div>

      <div className="container gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-colors ">
        {list?.map((item, index) => {
          return (
            <SingleColor
              setbg={setBg}
              id={index}
              hexValue={item.hex}
              {...item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
