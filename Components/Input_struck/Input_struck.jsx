import React from "react";

const Input_struck = () => (
  <div>
    <div className="mb-6 relative">
      <label
        for="input"
        className="block text-sm font-extrabold text-gray-700 mb-1"
      >
        Your Input Label
      </label>
      <div className="relative">
        <input
          type="text"
          id="input"
          name="input"
          className="mt-1 p-4 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 w-full transition duration-300 ease-in-out placeholder-gray-500 bg-gray-100"
          placeholder="Type in ..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 19l-2 2m0 0l2-2m-2 2h16a2 2 0 002-2V5a2 2 0 00-2-2H2a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Input_struck;

{
  /* */
}
