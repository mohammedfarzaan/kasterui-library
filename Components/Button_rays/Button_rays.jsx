import React from "react";

const Button_rays = () => (
  <div>
    <button className="group cursor-pointer border-2 border-gray-300 bg-white px-2 py-1 font-bold rounded-xl shadow-md">
      <div className="flex bg-gray-50 rounded-full px-4 py-3 shadow-inner">
        <svg
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 -rotate-45 mr-1 group-hover:rotate-0 duration-300"
        >
          <path
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        <span className="group-hover:translate-x-1.5 group-hover:duration-300">
          Send Message
        </span>
      </div>
    </button>
  </div>
);

export default Button_rays;

{
  /* */
}
