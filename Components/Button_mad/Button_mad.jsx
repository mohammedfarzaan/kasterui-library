import React from "react";

const Button_mad = () => (
  <div>
    <button
      className="relative border-2 border-black group hover:border-green-500 w-12 h-12 duration-500 overflow-hidden"
      type="button"
    >
      <p className="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0">
        ×
      </p>
      <span className="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-9 duration-500 top-12 left-0"></span>
      <span className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-9 duration-500 left-12"></span>
      <span className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-9 duration-500 right-12"></span>
      <span className="absolute w-full h-full bg-green-500 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"></span>
    </button>
  </div>
);

export default Button_mad;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
