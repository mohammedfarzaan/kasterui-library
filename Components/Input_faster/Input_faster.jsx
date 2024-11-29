import React from "react";

const Input_faster = () => (
  <div>
    <div className="flex flex-col-reverse">
      <input
        placeholder="Enter detail"
        className="peer outline-none border pl-2 py-1 duration-500 border-black focus:border-dashed relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
        type="text"
      />
      <span className="pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0">
        Enter detail
      </span>
    </div>
  </div>
);

export default Input_faster;

{
  /* */
}
