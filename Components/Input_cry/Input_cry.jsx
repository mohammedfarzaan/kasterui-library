import React from "react";

const Input_cry = () => (
  <div>
    <div className="p-4 flex flex-col w-72 bg-white">
      <label
        className="block mb-0.5 font-medium relative text-slate-700 after:absolute after:content-['*'] after:text-red-500 after:pl-0.5"
        for="email"
      >
        Email
      </label>
      <input
        required=""
        type="email"
        value="example$gmail.com"
        className="peer w-full h-10 px-3 border outline-none font-semibold shadow-[0px_0px_15px_rgba(0,0,0,0.05)]"
        id="email"
      />
      <div className="hidden peer-invalid:block">
        <div className="mt-2 flex items-center gap-1">
          <div className="w-4 fill-rose-500">
            <svg
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM13,5H11V15h2Zm0,12H11v2h2Z"></path>
            </svg>
          </div>
          <p className="Capitalize font-medium text-rose-500">
            Invalid email address
          </p>
        </div>
      </div>
      <div className="block peer-invalid:hidden">
        <div className="mt-2 flex items-center gap-1">
          <div className="w-4 fill-green-500">
            <svg
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"></path>
            </svg>
          </div>
          <p className="Capitalize font-medium text-green-500">
            Valid Email Address
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Input_cry;

{
  /* */
}
