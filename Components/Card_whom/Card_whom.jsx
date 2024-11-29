import React from "react";

const Card_whom = () => (
  <div>
    <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1">
      <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100"></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">Long Chair</span>
            <p className="text-xs text-gray-700">ID: 23432252</p>
          </div>
          <span className="font-bold  text-red-600">$25.99</span>
        </div>
        <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2">
          Add to cart
        </button>
      </div>
    </div>
  </div>
);

export default Card_whom;

{
  /* */
}
