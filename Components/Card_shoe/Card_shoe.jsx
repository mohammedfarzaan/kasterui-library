import React from "react";

const Card_shoe = () => (
  <div>
    <div className="overflow-hidden relative w-56 h-64 bg-gray-50 rounded-2xl text-sky-400 flex flex-col justify-end items-center gap-2">
      <svg
        className="absolute opacity-30 -rotate-12 -bottom-12 -right-12 w-40 h-40 stroke-current"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          className="svg-stroke-primary"
          d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>
      <div className="flex flex-col items-center">
        <p className="text-xl font-extrabold">Discount</p>
        <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-sky-200 after:w-12 after:h-0.5   before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-sky-200 before:w-12 before:h-0.5">
          Up to
        </p>
      </div>
      <span className="font-extrabold text-7xl -skew-x-12 -skew-y-12 -mt-1 mb-5">
        70%
      </span>
      <button className="z-10 px-4 py-2 bg-sky-400 text-gray-50 hover:bg-sky-300">
        Shop now
      </button>
      <p className="text-xs mb-1">*Variable prices</p>
    </div>
  </div>
);

export default Card_shoe;

{
  /* */
}
