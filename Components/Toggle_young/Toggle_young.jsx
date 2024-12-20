import React from "react";

const Toggle_young = () => (
  <div>
    <div className="flex flex-wrap justify-center items-center w-11/12 mx-auto select-none gap-2 max-w-[500px]">
      <label className="text-slate-400">
        <input
          type="checkbox"
          className="h-[1px] opacity-0 overflow-hidden absolute whitespace-nowrap w-[1px] peer"
        />
        <span className="peer-checked:border-blue-500 peer-checked:shadow-blue-500/10 peer-checked:text-blue-500 peer-checked:before:border-blue-500 peer-checked:before:bg-blue-500 peer-checked:before:opacity-100 peer-checked:before:scale-100 peer-checked:before:content-['✓'] flex flex-col items-center justify-center w-28 min-h-[7rem] rounded-lg shadow-lg transition-all duration-200 cursor-pointer relative border-slate-300 border-[3px] bg-white before:absolute before:block before:w-5 before:h-5 before:border-[3px]  before:rounded-full before:top-1 before:left-1 before:opacity-0 before:transition-transform before:scale-0 before:text-white before:text-xs before:flex before:items-center before:justify-center hover:border-blue-500 hover:before:scale-100 hover:before:opacity-100">
          <span className="transition-all duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="162"
                cy="128"
                r="34"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              ></circle>
              <path
                d="M128,94V26.00089H94a34,34,0,0,0,0,68Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              ></path>
              <path
                d="M128,161.99911V94H94a34,34,0,0,0,0,68Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              ></path>
              <path
                d="M128,94V26.00089h34a34,34,0,0,1,0,68Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              ></path>
              <path
                d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              ></path>
            </svg>
          </span>
          <span className="transition-all duration-300 text-center">Figma</span>
        </span>
      </label>
    </div>
  </div>
);

export default Toggle_young;

{
  /* */
}
