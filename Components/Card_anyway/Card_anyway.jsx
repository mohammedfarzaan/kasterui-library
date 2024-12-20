import React from "react";

const Card_anyway = () => (
  <div>
    <div className="group relative overflow-hidden h-72 w-64 bg-sky-300 rounded-xl">
      <div className="absolute w-56 h-64 bg-gray-50 z-10 top-4 left-4 opacity-50 rounded-2xl blur duration-300 group-hover:blur-none [transform:rotate3d(1_,-1,_1,_30deg)] duration-500 group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]"></div>
      <div className="absolute w-56 h-64 z-10 top-4 left-4 p-3 rounded-2xl flex flex-col justify-end items-start gap-4 [transform:rotate3d(1_,-1,_1,_30deg)] duration-500 group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]">
        <span className="text-red-800 text-2xl font-extrabold">Card title</span>
        <p className="text-gray-800 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <button className="bg-gray-50 px-3 py-2 rounded-xl hover:bg-sky-600 duration-300">
          See more
        </button>
      </div>

      <svg
        y="0"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        width="100"
        viewBox="0 0 10 10"
        preserveAspectRatio="xMidYMid meet"
        height="100"
        className="fill-sky-400 w-64 h-64 absolute -bottom-20 -left-32"
      >
        <path d="M0,5A5,5,0,1,0,5,0,5,5,0,0,0,0,5ZM8.12,5A3.12,3.12,0,1,1,5,1.88,3.12,3.12,0,0,1,8.12,5Z"></path>
      </svg>
    </div>
  </div>
);

export default Card_anyway;

{
  /* */
}
