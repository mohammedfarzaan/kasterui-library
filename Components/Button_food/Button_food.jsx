import React from "react";

const Button_food = () => (
  <div>
    <div className="w-screen h-screen bg-[#fafafa]">
      <div className="flex justify-center items-center gap-12 h-full">
        <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
          <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
            <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2">
              <div className="flex gap-2 items-center font-sans">
                <span className="font-semibold">Get Started</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Button_food;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}
