import React from "react";

const Card_chief = () => (
  <div>
    <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
      <svg
        className="stroke-purple-300 shrink-0 rounded-full"
        height="50"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="50"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>
      <div>
        <span className="font-bold text-purple-300">Card title</span>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
);

export default Card_chief;

{
  /* */
}
