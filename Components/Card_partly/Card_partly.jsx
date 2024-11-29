import React from "react";

const Card_partly = () => (
  <div>
    <div className="max-w-sm mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden">
      <div className="px-5 py-3 flex justify-between items-center">
        <h3 className="text-zinc-900 dark:text-white text-lg">Progress</h3>
        <svg
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-zinc-900 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <div className="px-5 pb-5">
        <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
          File: var/test/admin.php extracted..
        </p>
        <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2.5">
          <div
            style="width: 70%"
            className="bg-blue-600 h-2.5 rounded-full"
          ></div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            70% Complete
          </span>
          <button className="text-xs text-blue-600 hover:underline">
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_partly;

{
  /* */
}
