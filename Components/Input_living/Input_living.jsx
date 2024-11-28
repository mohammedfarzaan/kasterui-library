import React from "react";

const Input_living = () => (
  <div>
    <div className="flex justify-center items-center bg-white w-full h-full">
      <div>
        <label
          className="block text-gray-800 font-semibold text-sm"
          for="inputname"
        >
          Input Name
        </label>
        <div className="mt-2">
          <input
            className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            name="inputname"
            type="text"
          />
        </div>
        <label className="pt-1 block text-gray-500 text-sm">
          Some Description
        </label>
      </div>
    </div>
  </div>
);

export default Input_living;

{
  /* */
}
