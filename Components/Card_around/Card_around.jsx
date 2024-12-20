import React from "react";

const Card_around = () => (
  <div>
    <div className="relative w-60 h-80 bg-gray-50 rounded-2xl p-4  shadow shadow-sky-800 flex flex-col justify-around items-stretch">
      <svg
        y="0"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        width="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        height="100"
        className="stroke-blue-400 w-12 h-12 p-1 bg-sky-100 rounded-2xl"
      >
        <path
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          d="M60.7,25v7.2m0,14.2v7.2m0,14.2V75M25,25a7.1,7.1,0,0,0-7.1,7.2V42.9a7.1,7.1,0,1,1,0,14.2V67.8A7.1,7.1,0,0,0,25,75H75a7.1,7.1,0,0,0,7.1-7.2V57.1a7.1,7.1,0,1,1,0-14.2V32.2A7.1,7.1,0,0,0,75,25Z"
        ></path>
      </svg>
      <span className="text-blue-400 font-semibold text-xl">
        Continue payment
      </span>
      <p className="text-base text-gray-600">
        Wait! you have NOT finished your purchase, do you want to continue?{" "}
      </p>
      <div className="flex flex-col gap-2">
        <button className="border-2 border-blue-400 bg-blue-400 py-1 rounded text-gray-50 hover:bg-blue-300">
          Continue
        </button>
        <button className="border-2 border-blue-400 py-1 rounded hover:bg-gray-100">
          See more films
        </button>
      </div>
      <div className="absolute top-3 right-2  text-red-300 hover:text-red-500">
        <svg
          y="0"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          width="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          height="100"
          className="w-12 h-12 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M50,87.4A37.4,37.4,0,1,0,12.6,50,37.3,37.3,0,0,0,50,87.4ZM44,37.3A4.7,4.7,0,0,0,37.3,44l6.1,6-6.1,6A4.7,4.7,0,0,0,44,62.7l6-6.1,6,6.1A4.7,4.7,0,0,0,62.7,56l-6.1-6,6.1-6A4.7,4.7,0,0,0,56,37.3l-6,6.1Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Card_around;

{
  /* */
}
