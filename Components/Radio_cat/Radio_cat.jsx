import React from "react";

const Radio_cat = () => (
  <div>
    <div className="flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none">
      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <input
          type="radio"
          name="radio"
          value="html"
          className="peer hidden"
          checked=""
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
          HTML
        </span>
      </label>

      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <input
          type="radio"
          name="radio"
          value="react"
          className="peer hidden"
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
          React
        </span>
      </label>

      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <input type="radio" name="radio" value="vue" className="peer hidden" />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
          Vue
        </span>
      </label>
    </div>
  </div>
);

export default Radio_cat;

{
  /* */
}
