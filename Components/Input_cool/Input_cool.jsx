import React from "react";

const Input_cool = () => (
  <div>
    <div className="flex items-center justify-center">
      <div className="relative w-80">
        <input
          className="w-full p-3 pl-10 pr-12 border-gray text-white bg-black rounded-2xl outline-none glowing-border"
          placeholder="Search..."
          type="text"
        />
        <button className="absolute right-1 top-1 p-2 bg-gray-800 rounded-xl filter-btn">
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-7.414 7.414A1 1 0 0013 15v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute left-3 top-3 h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Input_cool;

{
  /* */
}
