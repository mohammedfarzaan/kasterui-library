import React from "react";

const Button_was = () => (
  <div>
    <button className="cursor-pointer group hover:scale-105 hover:-translate-y-5 transition-all duration-500 ease-in-out hover:shadow-2xl bg-gray-50 hover:bg-white p-2 rounded-xl border-2 border-gray-400/30 shadow-lg">
      <div className="flex bg-gray-100 p-2 rounded-full shadow-inner">
        <div className="transition-all duration-500 ease-linear group-hover:rotate-0 group-hover:py-1 -rotate-45 px-1">
          <svg
            viewBox="0 0 24 24"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m20.34 9.32l-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57l-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <span className="pr-1 font-semibold drop-shadow-sm">Send Message</span>
      </div>
    </button>
  </div>
);

export default Button_was;

{
  /* */
}
