import React from "react";

const Card_win = () => (
  <div>
    <div className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden bg-gradient-to-bl from-sky-400 via-sky-500 to-sky-700 p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] backdrop-filter backdrop-blur-md border border-neutral-600">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">City Name</h2>
          <p className="text-neutral-800">Sunny</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute -top-2 -right-2 w-12 h-12 stroke-yellow-300"
        >
          <path
            d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold text-white">22°C</p>
        <div className="flex items-center justify-between gap-1">
          <span className="mr-2 text-neutral-800">Feels Like</span>
          <span className="text-white">20°C</span>
        </div>
        <div className="flex items-center justify-between gap-1">
          <span className="text-neutral-800">Wind</span>
          <span className="text-white">10 km/h</span>
        </div>
        <div className="flex items-center justify-between gap-1">
          <span className="text-neutral-800">Humidity</span>
          <span className="text-white">75%</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_win;

{
  /* */
}
