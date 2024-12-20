import React from "react";

const Button_effort = () => (
  <div>
    <button className="group relative z-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br flex items-center font-medium text-white transition-all duration-200 ease-in-out rounded-lg px-4 py-2 active:scale-95 active:shadow-inner">
      <div className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 animate-pulse group-hover:inset-10"></div>
      <div className="svg-wrapper transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class=""
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="#fff"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
        </svg>
      </div>
      <span className="ml-1 text-white transition-all duration-300 group-hover:text-transparent">
        Send
      </span>
    </button>
  </div>
);

export default Button_effort;

{
  /* */
}
