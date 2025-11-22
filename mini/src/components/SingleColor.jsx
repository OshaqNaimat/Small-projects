import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { GoSun } from "react-icons/go";
import { LuCopy } from "react-icons/lu";
import "./SingleColor.css";
const SingleColor = ({ rgb, hexValue, id, setbg }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(`#${hexValue}`);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 700);
  };

  const handleTheme = () => {
    setTimeout(() => {
      setbg(`#${hexValue}`);
    }, 500);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: `rgb(${rgb})`,
        }}
        className="fade-in p-20 shadow my-10 mx-4 rounded-md text-center relative select-none hover:scale-110 duration-500"
      >
        <h2
          className={`text-2xl text-center ${
            id > 10 ? `text-white` : `text-black`
          } font-semibold text-center`}
        >
          #{hexValue}
        </h2>
        {copied ? (
          <GiCheckMark
            size={20}
            className={`cursor-pointer ${
              id > 10 ? `text-white` : `text-black`
            } active:scale-90 duration-300 absolute top-[20px] left-[20px]`}
          />
        ) : (
          <LuCopy
            onClick={handleCopy}
            size={20}
            className={`cursor-pointer ${
              id > 10 ? `text-white` : `text-black`
            } active:scale-90 duration-300 absolute top-[20px] left-[20px]`}
          />
        )}

        <GoSun
          onClick={handleTheme}
          size={20}
          className={`cursor-pointer ${
            id > 10 ? `text-white` : `text-black`
          } active:scale-90 duration-300 absolute bottom-[20px] right-[20px]`}
        />
      </div>
    </>
  );
};

export default SingleColor;
