import React from "react";

const Input_rest = () => (
  <div>
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <input
          className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
          type="text"
          name="username"
          id="username"
        />
        <label
          className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
          for="username"
        >
          Name
        </label>
      </div>
    </div>
  </div>
);

export default Input_rest;

{
  /* */
}
