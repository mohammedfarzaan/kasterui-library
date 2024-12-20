import React from "react";

const Input_couple = () => (
  <div>
    <div className="flex items-center justify-center bg-gray-800 overflow-hidden p-1 border border-white border-opacity-30 rounded-lg shadow-md h-9">
      <input
        className="w-42 h-full border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
        type="text"
        name="text"
        id="input"
        placeholder="0000 0000 0000 0000"
      />
      <div className="flex items-center justify-center relative w-10 h-6 bg-gray-800 border border-white border-opacity-20 rounded-md">
        <svg
          className="text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ff9800"
            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
          ></path>
          <path
            fill="#d50000"
            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
          ></path>
          <path
            fill="#ff3d00"
            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Input_couple;

{
  /* */
}
