import React from "react";

const Button_wide = () => (
  <div>
    <button className="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300">
      <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
      <span className="relative text-xl font-semibold">Text Button</span>
    </button>
  </div>
);

export default Button_wide;

{
  /* */
}
