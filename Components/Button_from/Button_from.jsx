import React from "react";

const Button_from = () => (
  <div>
    <label className="w-16 h-8 bg-black shadow-inner rounded-full flex justify-around items-center overflow-hidden outline outline-2 outline-offset-2">
      <input className="peer hidden" type="checkbox" />
      <div className="w-6 h-6 flex justify-center items-center text-white bg-black border-[2px] duration-500 rounded-full peer-checked:translate-y-8"></div>
      <div className="w-6 h-6 flex justify-center items-center text-white duration-500 rounded-full -translate-y-8 peer-checked:translate-y-0 rotate-90">
        𝝞
      </div>
    </label>
  </div>
);

export default Button_from;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
