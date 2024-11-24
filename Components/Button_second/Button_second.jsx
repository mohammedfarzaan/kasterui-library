import React from "react";

const Button_second = () => (
  <div>
    <button className="cursor-pointer w-28 h-10 font-poppins text-lg border-solid border-2 border-slate-400 rounded-3xl active:shadow-none hover:shadow-lg duration-300 transition hover:text-white hover:bg-gradient-to-r from-[#F28500] to-[#FF00FF] rounded p-1">
      <span className="h-9 bg-black hover:text-white rounded-3xl p-1 px-6 transition duration-300">
        Button
      </span>
    </button>
  </div>
);

export default Button_second;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
