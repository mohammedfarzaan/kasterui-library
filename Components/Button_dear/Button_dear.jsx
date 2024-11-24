import React from "react";

const Button_dear = () => (
  <div>
    <button className="relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400">
      <span className="relative text-white font-bold px-8 py-8">
        {" "}
        Hover me{" "}
      </span>
    </button>
  </div>
);

export default Button_dear;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
