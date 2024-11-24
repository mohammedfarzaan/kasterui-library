import React from "react";

const Button_cheese = () => (
  <div>
    <div className="relative group">
      <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
          <button
            name="text"
            className="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black"
          >
            Get Started
          </button>
        </div>
        <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
      </div>
    </div>
  </div>
);

export default Button_cheese;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
