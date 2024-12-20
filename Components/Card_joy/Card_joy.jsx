import React from "react";

const Card_joy = () => (
  <div>
    <div className="card relative h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-purple-500 to-pink-500">
      <p className="text-2xl  font-medium">5430 4900 3232 9755</p>
      <div className="flex justify-between gap-10">
        <p className="text-lg font-medium">Elon Musk</p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="self-end">Valid Date</p>
          <p className="self-end">2/14/2024</p>
        </div>
        <div className="self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 58 36"
            height="36"
            width="58"
          >
            <circle
              fill-opacity="0.62"
              fill="#F9CCD1"
              r="18"
              cy="18"
              cx="18"
            ></circle>
            <circle
              fill="#424242"
              r="18"
              cy="18"
              cx="40"
              opacity="0.36"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Card_joy;

{
  /* */
}
