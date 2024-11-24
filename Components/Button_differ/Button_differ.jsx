import React from "react";

const Button_differ = () => (
  <div>
    <button className="shadow shadow-red-300 cursor-pointer overflow-hidden text-white bg-red-600 px-4 py-3 group active:shadow-green-200 focus:outline-none rounded flex items-center justify-center relative gap-4">
      <span className="group-hover:-translate-x-40 transition-transform duration-200">
        REMOVE
      </span>

      <div className="w-0.5 h-6 bg-red-800 group-hover:-translate-x-40 transition-transform duration-200"></div>

      <div className="svg-wrapper group-hover:-translate-x-11 transition-transform duration-200">
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          stroke-width="4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>

      <div className="svg-wrapper group-active:bg-green-600 group-active:flex hidden absolute w-full h-full flex items-center justify-center">
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          stroke-width="4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 12.75l6 6 9-13.5"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
    </button>
  </div>
);

export default Button_differ;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
