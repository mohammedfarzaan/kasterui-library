import React from "react";

const Button_fat = () => (
  <div>
    <button className="cursor-pointer shadow-xl hover:shadow-none duration-300 border-2 border-gray-400 p-1 w-40 h-14 rounded-xl bg-gray-50">
      <div className="h-full flex gap-1 items-center justify-center shadow-inner shadow-black/10 rounded-full">
        <svg
          className="size-4 -rotate-45"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        <span className="font-medium"> Send Telegram </span>
      </div>
    </button>
  </div>
);

export default Button_fat;

{
  /* */
}
