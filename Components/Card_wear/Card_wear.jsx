import React from "react";

const Card_wear = () => (
  <div>
    <div className="h-[220px] w-[700px] bg-slate-200 flex rounded-xl">
      <div className="h-full w-[250px] p-7 text-white bg-[#261a6b] rounded-l-xl">
        <p className="text-[11px] tracking-widest text-[#cccc]">COURSE</p>
        <h1 className="text-[25px] pt-5 font-medium tracking-wide leading-[25px]">
          JavaScript Fundamentals
        </h1>
        <h4 className="text-[12px] pt-[50px] text-[#cccccc] cursor-pointer">
          view all chapters <i className="fa-solid fa-chevron-right"></i>
        </h4>
      </div>

      <div className="p-7 bg-white w-full rounded-r-xl relative">
        <div className="flex justify-between">
          <h1 className="text-[#949494] text-[13px] tracking-[.5px]">
            CHAPTER 4
          </h1>
          <div className="relative">
            <div className="h-1.5 w-[200px] bg-slate-200 rounded-xl">
              <div className="h-1.5 w-[120px] bg-[#261a6b] rounded-xl"></div>
            </div>
            <p className="text-[#a8a8a8] text-[12px] tracking-[.5px] absolute right-0">
              6/9 Chaqllenges
            </p>
          </div>
        </div>
        <h1 className="text-[28px] pt-2 font-[500] tracking-wide">
          Callbacks &amp; Closures
        </h1>
        <input
          type="button"
          value="Continue"
          className="h-10 w-[120px] bg-[#261a6be8] text-white rounded-3xl tracking-wide absolute right-10 bottom-7 cursor-pointer hover:bg-[#4938b6e8]"
        />
      </div>
    </div>
  </div>
);

export default Card_wear;

{
  /* */
}
