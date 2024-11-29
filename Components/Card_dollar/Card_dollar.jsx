import React from "react";

const Card_dollar = () => (
  <div>
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-green-200"></div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pro Plan</h2>
        <p className="text-gray-600 mb-6">Perfect for growing businesses</p>
        <p className="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
        <ul className="text-sm text-gray-600 mb-6">
          <li className="mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-4 h-4 mr-2 text-green-500"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            25 Users
          </li>
          <li className="mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-4 h-4 mr-2 text-green-500"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            Advanced Features
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-4 h-4 mr-2 text-green-500"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            24/7 Support
          </li>
        </ul>
      </div>
      <div className="p-4">
        <button className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
          Select Plan
        </button>
      </div>
    </div>
  </div>
);

export default Card_dollar;

{
  /* */
}
