import React from "react";

const Button_high = () => (
  <div>
    <button className="cursor-pointer select-none text-[4rem] font-bold text-slate-100 relative group text-center flex justify-center">
      <div className="absolute top-[6px] text-neutral-400 transition duration-300 drop-shadow-lg group-hover:drop-shadow-md group-active:drop-shadow-none">
        boop!
      </div>
      <div className="absolute top-[5px] text-neutral-300">boop!</div>
      <div className="absolute transition duration-300 transform group-hover:translate-y-1 group-active:translate-y-1.5">
        boop!
      </div>

      <div className="dont-mind-me opacity-0">boop!</div>
    </button>
  </div>
);

export default Button_high;

{
  /* */
}
