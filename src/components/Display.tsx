import React, { Dispatch, SetStateAction } from "react";

interface props {
  displayText: string;
  setDisplayText: Dispatch<SetStateAction<string>>;
}

const Display = ({ displayText, setDisplayText }: props) => {
  return (
    <div className="border border-solid border-gray-800 p-5 rounded-lg">
      <div
        id="outputString"
        className="bg-[#121111] text-white lg:p-5 p-2 rounded-lg shadow-lg uppercase min-h-[20vh] break-all w=[100%] lg:text-lg"
      >
        {displayText}
      </div>
      <button
        onClick={() => setDisplayText("")}
        className="bg-yellow-600 px-5 py-2 rounded-lg text-white mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Display;
