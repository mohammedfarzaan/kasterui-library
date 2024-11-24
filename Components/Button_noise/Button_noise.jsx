import React from "react";

const Button_noise = () => (
  <div>
    <button className="group flex h-fit w-fit flex-col items-center justify-center rounded-full bg-[#F1ddcf] px-[2em] py-[0.5em] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]">
      <p className="font-nunito text-[1.5em] font-semibold text-[#d19466] duration-200 group-active:translate-y-[5%]">
        Button
      </p>
    </button>
  </div>
);

export default Button_noise;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
