import React from "react";

const Button_simply = () => (
  <div>
    <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
      <span className="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">
        Magic !
      </span>
      <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
      <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
    </button>
  </div>
);

export default Button_simply;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
