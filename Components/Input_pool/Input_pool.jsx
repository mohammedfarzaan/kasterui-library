import React from "react";

const Input_pool = () => (
  <div>
    <div className="relative group">
      <div className="relative w-96 h-16 opacity-90 overflow-hidden rounded-2xl bg-black z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-500 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 text-[#D3CCD4] absolute left-4 top-4 z-[2]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
        <div className="absolute overflow-hidden top-[10px] right-3 rounded-xl bg-black p-[2px] z-20 opacity-90">
          <div className="absolute group-hover:-left-24 transistion-all duration-300 ease-out w-32 h-5 bg-[#a8a0e0] rounded-full blur-[12px] -left-8 -top-6"></div>
          <div className="absolute group-hover:-left-24 transistion-all duration-300 ease-out w-32 h-5 bg-[#a8a0e0] rounded-full blur-[12px] -left-8 -bottom-6"></div>
          <div className="bg-black relative rounded-lg p-1.5">
            <div className="absolute group-hover:-left-16 transistion-all duration-300 ease-out w-32 h-5 bg-[#a8a0e0] rounded-full blur-[16px] -left-8 -top-8"></div>
            <div className="absolute group-hover:-left-16 transistion-all duration-300 ease-out w-32 h-5 bg-[#a8a0e0] rounded-full blur-[16px] -left-8 -bottom-8"></div>

            <svg
              className="size-7 text-white"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
          <input
            type="text"
            name="text"
            placeholder="Search..."
            className="input placeholder:text-[#D3CCD4] focus:outline-none h-full opacity-90 w-full px-16 py-3 placeholder:text-xl rounded-2xl bg-black"
          />
        </div>
        <div className="absolute group-hover:-left-[5px] group-hover:-top-[170px] transistion-all duration-300 ease-out w-56 h-48 bg-[#e4a9dd] blur-[20px] -left-[150px] -top-[150px]"></div>
        <div className="absolute group-hover:-right-[5px] group-hover:-bottom-[170px] transistion-all duration-300 ease-out w-56 h-48 bg-[#ADA2E8] blur-[20px] -right-[150px] -bottom-[150px]"></div>
      </div>
      <div className="absolute w-32 rotate-6 h-10 bg-[#CE25A2] rounded-full blur-[8px] -left-0 top-1"></div>
      <div className="absolute w-32 rotate-6 h-10 group-hover:w-44 transistion-all duration-300 ease-out bg-[#5241c9] rounded-2xl blur-[10px] -right-0 bottom-1"></div>
      <div className="absolute w-32 h-14 group-hover:h-6 group-hover:blur-[40px] group-hover:w-56 transistion-all ease-out duration-300 bg-[#CE25A2] rounded-full blur-[50px] -left-5 -top-1"></div>
      <div className="absolute w-32 h-14 group-hover:h-6 group-hover:blur-[40px] group-hover:w-56 transistion-all ease-out duration-300 bg-[#5241c9] rounded-full blur-[50px] -right-3 -bottom-2"></div>
    </div>
  </div>
);

export default Input_pool;

{
  /* */
}
