import React from "react";

const Input_supper = () => (
  <div>
    <div className="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        for="unique-input"
      >
        Your Label
      </label>
      <input
        className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
        placeholder="Enter text here"
        type="text"
        id="unique-input"
      />
    </div>
  </div>
);

export default Input_supper;

{
  /* */
}
