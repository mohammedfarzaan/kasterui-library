import React from "react";

const Toggle_shelf = () => (
  <div>
    <label className="relative block aspect-[2/0.75] cursor-pointer w-20 rounded-full  bg-gradient-to-r from-red-600 to-green-600 bg-[length:100%_100%] shadow-2xl shadow-purple-300 transition-all duration-500 [&amp;:has(input:checked)]:rotate-180  hover:bg-[length:100%_500%] focus:bg-[length:100%_500%]">
      <input type="checkbox" className="peer/input hidden" />
      <div className="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
    </label>
  </div>
);

export default Toggle_shelf;

{
  /* */
}
