import React from "react";

const Button_hurry = () => (
  <div>
    <button className="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none">
      <svg
        className="w-5 h-5"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_hurry;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
