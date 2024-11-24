import React from "react";

const Button_earn = () => (
  <div>
    <button className="relative overflow-hidden bg-white border-2 border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-500 ease-linear focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:scale-95">
      Click Me
      <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"></span>
    </button>
  </div>
);

export default Button_earn;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
