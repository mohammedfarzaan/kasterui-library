import React from "react";

const Input_under = () => (
  <div>
    <div className="relative flex items-center rounded-lg bg-gradient-to-r from-blue-900 to-gray-800 text-cyan-400 py-2 px-4 w-1/2 focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-blue-500 hover:shadow-md transition duration-300 ease-in-out w-75% sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 mr-2 text-blue-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
      <input
        className="flex-grow bg-transparent focus:outline-none hover:border-solid hover:border-blue-500 transition duration-300 ease-in-out text-base md:text-lg lg:text-xl"
        placeholder="Type something..."
        name="text"
        type="text"
      />
    </div>
  </div>
);

export default Input_under;

{
  /* */
}
