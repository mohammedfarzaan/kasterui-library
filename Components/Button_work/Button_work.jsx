import React from "react";

const Button_work = () => (
  <div>
    <button className="hover:animate-bounce relative overflow-hidden bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-105 active:bg-gray-300 focus:outline-none">
      <span className="absolute inset-0 flex items-center justify-center"></span>
      Button
    </button>
  </div>
);

export default Button_work;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
