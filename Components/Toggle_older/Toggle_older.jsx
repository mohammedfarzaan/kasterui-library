import React from "react";

const Toggle_older = () => (
  <div>
    <label className="switch">
      <input className="peer hidden" type="checkbox" />
      <span className="slider absolute h-5 w-5 translate-x-0.5 translate-y-0.5 rounded-md border-2 border-black bg-blue-500 shadow-[inset_2px_3px_2px] duration-700 peer-checked:translate-x-[1.6rem] peer-checked:border-gray-200 peer-checked:bg-white peer-checked:shadow-[inset_-2px_-2px_3px]"></span>
      <div className="h-6 w-12 rounded-lg border-2 border-black shadow-[2px_3px_2px] duration-700 peer-checked:bg-blue-500"></div>
    </label>
  </div>
);

export default Toggle_older;

{
  /* */
}
