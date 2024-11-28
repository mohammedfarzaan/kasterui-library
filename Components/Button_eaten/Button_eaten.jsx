import React from "react";

const Button_eaten = () => (
  <div>
    <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="24px"
        width="24px"
      >
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Interface / Download">
            {" "}
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#f1f1f1"
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              id="Vector"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
      Download
      <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
        Download
      </div>
    </button>
  </div>
);

export default Button_eaten;

{
  /* */
}
