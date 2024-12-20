import React from "react";

const Card_ocean = () => (
  <div>
    <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
      <svg
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#000000"
        fill="none"
        viewBox="0 0 24 24"
        className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
        <line y2="21" x2="16" y1="21" x1="8"></line>
        <line y2="21" x2="12" y1="17" x1="12"></line>
      </svg>

      <p className="font-bold text-2xl group-hover:text-white text-black/80">
        WEBSITE SEO
      </p>
      <p className="text-gray-400 text-sm">
        Website ravida surna eveti semen the conse tusio anivite dianne one
        nivam acestion vue artin dictum.
      </p>
      <p
        style="-webkit-text-stroke: 1px gray;
                              -webkit-text-fill-color: transparent;"
        className="text-5xl font-bold self-end"
      >
        09
      </p>
    </div>
  </div>
);

export default Card_ocean;

{
  /* */
}
