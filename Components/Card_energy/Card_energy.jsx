import React from "react";

const Card_energy = () => (
  <div>
    <div className="flex flex-col bg-white w-72 h-48 rounded-md py-4 px-6 border">
      <h3 className="text-center font-bold text-xl text-gray-800 pb-2">
        $300.00
      </h3>
      <h3 className="text-base font-semibold text-gray-900">Product Name</h3>
      <p className="text-sm text-gray-500 pb-3">Product Description</p>
      <div className="flex gap-2 text-sm text-gray-500 border-b pb-2">
        <p class="">last update:</p>
        <p>14/08/2023</p>
      </div>
      <div className="flex justify-around items-center py-3">
        <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
          <svg
            className="w-6 stroke-green-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          <button className="font-semibold text-sm text-green-700">Edit</button>
        </div>
        <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
          <svg
            className="w-6 stroke-red-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          <button className="font-semibold text-sm text-red-700">Delete</button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_energy;

{
  /* */
}
