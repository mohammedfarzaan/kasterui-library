import React from "react";

const Button_gate = () => (
  <div>
    <button className="cursor-pointer text-gray-800 bg-white px-3 py-3 shadow-xl ring-2 ring-gray-900/5 border border-zinc-950/10 border-2 rounded-xl font-bold flex gap-2 text-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 15 15"
        height="28"
        width="28"
        className="mt-1 size-5"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          fill="currentColor"
          d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
        ></path>
      </svg>
      Send Message
    </button>
  </div>
);

export default Button_gate;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /* */
}