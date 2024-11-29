import React from "react";

const Input_snow = () => (
  <div>
    <div className="input flex flex-col w-fit static">
      <label
        for="input"
        className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
      >
        Password:
      </label>
      <input
        id="password"
        type="password"
        placeholder="Write here..."
        name="input"
        className="border-blue-500 input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25"
      />
    </div>
  </div>
);

export default Input_snow;

{
  /* */
}
