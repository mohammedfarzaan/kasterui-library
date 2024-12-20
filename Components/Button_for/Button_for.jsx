import React from "react";

const Button_for = () => (
  <div>
    <button className="flex transform cursor-pointer items-center justify-center space-x-2 rounded-full bg-white px-4 py-2 font-semibold tracking-tight text-black shadow-md transition duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 rotate-45 transform transition duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        ></path>
      </svg>
      <span className="mr-2">Send Message</span>
    </button>
  </div>
);

export default Button_for;

{
  /* */
}
