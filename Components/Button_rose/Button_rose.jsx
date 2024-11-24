import React from "react";

const Button_rose = () => (
  <div>
    <button className="cursor-grab w-32 h-32 flex items-center justify-center rounded-full bg-white animate-bounce">
      <span className="h-20 w-20 rounded-full bg-yellow-500 hover:bg-red-500 relative rotate-90">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="block h-2 w-2 bg-black rounded-full"></span>
          <span className="block h-2 w-2 bg-black rounded-full mt-3"></span>
        </span>
      </span>
    </button>
  </div>
);

export default Button_rose;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}