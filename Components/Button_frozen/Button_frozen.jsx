import React from "react";

const Button_frozen = () => (
  <div>
    <button className="relative overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 px-8 font-semibold rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12">
      <span className="absolute top-0 left-0 w-full h-full bg-blue-300"></span>
      <span className="relative z-10">Hover Me</span>
    </button>
  </div>
);

export default Button_frozen;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
