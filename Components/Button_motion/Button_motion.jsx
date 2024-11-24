import React from "react";

const Button_motion = () => (
  <div>
    <button className="bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer relative group hover:bg-[#333] transition duration-300 ease-in hover:-translate-x-2 hover:translate-y-2">
      <h1 className="group-hover:text-white text-[#333] font-bold">SUBMIT</h1>
      <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
        <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10"></div>
      </div>
    </button>
  </div>
);

export default Button_motion;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}