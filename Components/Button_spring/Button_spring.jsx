import React from "react";

const Button_spring = () => (
  <div>
    <div className="relative w-full group">
      <div className="relative z-40 cursor-pointer group-hover:translate-x-8 group-hover:shadow-2xl group-hover:-translate-y-8 transition-all duration-500 bg-neutral-900 flex items-center justify-center h-32 w-32 mx-auto rounded-xl">
        <svg
          className="h-6 w-6 text-white/60"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
          <path d="M7 9l5 -5l5 5"></path>
          <path d="M12 4l0 12"></path>
        </svg>
      </div>
      <div className="absolute border opacity-0 group-hover:opacity-80 transition-all duration-300 border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 w-32 mx-auto rounded-xl"></div>
    </div>
  </div>
);

export default Button_spring;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
