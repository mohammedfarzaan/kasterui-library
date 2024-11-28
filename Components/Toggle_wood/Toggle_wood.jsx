import React from "react";

const Toggle_wood = () => (
  <div>
    <label className="switch cursor-pointer relative flex w-[6.7rem] scale-75 overflow-hidden p-2">
      <input type="checkbox" name="" className="peer hidden" />
      <div className="absolute -right-[6.5rem] z-[1] flex h-12 w-24 skew-x-12 items-center justify-center text-lg duration-500 peer-checked:right-1">
        <span className="-skew-x-12">ON</span>
      </div>
      <div className="z-0 h-12 w-24 -skew-x-12 border border-black duration-500 peer-checked:skew-x-12 peer-checked:bg-green-500"></div>
      <div className="absolute left-[0.3rem] flex h-12 w-24 -skew-x-12 items-center justify-center text-lg duration-500 peer-checked:-left-[6.5rem]">
        <span className="skew-x-12">OFF</span>
      </div>
    </label>
  </div>
);

export default Toggle_wood;

{
  /* */
}
