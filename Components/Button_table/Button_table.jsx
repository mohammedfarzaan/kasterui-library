import React from "react";

const Button_table = () => (
  <div>
    <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
      <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">
        Blink
      </span>
      <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
      <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

      <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
      <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
    </button>
  </div>
);

export default Button_table;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
