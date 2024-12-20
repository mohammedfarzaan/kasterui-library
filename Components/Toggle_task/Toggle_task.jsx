import React from "react";

const Toggle_task = () => (
  <div>
    <label className="switch relative cursor-pointer">
      <input className="sr-only peer" type="checkbox" />
      <div className="after:z-10 w-[144px] h-[74px] rounded-full bg-white border-black border-2 hover:bg-rose-50 peer-checked:bg-black transition-all duration-300 ease-in-out after:w-[58px] after:h-[58px] after:bg-black after:rounded-full after:absolute after:top-2 after:left-2 after:transition-all after:duration-500 after:ease-in-out after:peer-checked:translate-x-[72px] after:peer-checked:bg-rose-50"></div>
      <svg
        className="absolute opacity-0 peer-checked:opacity-100 top-4 left-4 z-20 fill-black w-10 h-10 -rotate-90 peer-checked:rotate-0 peer-checked:translate-x-[72px] transition-all duration-500 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
      >
        <path
          className="cls-1"
          d="M61.4,18c-5.5-1.6-11.3,1.6-12.9,7.1l-.8,2.9c-.5,1.9-1.5,3.6-2.8,5.1l-7.4,8.2c-1.3,1.4-1.2,3.6.2,4.9s3.6,1.2,4.9-.2l7.4-8.2c2-2.2,3.5-4.9,4.4-7.8l.8-2.9c.5-1.8,2.4-2.9,4.3-2.4s2.9,2.4,2.4,4.3l-.8,2.9c-.8,2.9-2.1,5.6-3.8,8-.8,1.1-.8,2.4-.2,3.6s1.8,1.9,3.1,1.9h19.3c1.3,0,2.3,1,2.3,2.3s-.6,1.8-1.5,2.2c-1.1.4-1.9,1.3-2.2,2.4s0,2.3.8,3.1c.4.4.6.9.6,1.5,0,1.1-.8,2.1-1.9,2.3-1.2.2-2.2,1.1-2.6,2.2s-.2,2.4.5,3.4c.3.4.5.9.5,1.4,0,1-.6,1.8-1.5,2.2-1.7.7-2.6,2.4-2.1,4.2,0,.2,0,.4,0,.6,0,1.3-1,2.3-2.3,2.3h-14.1c-1.8,0-3.6-.5-5.1-1.5l-8.9-5.9c-1.6-1.1-3.7-.6-4.8,1s-.6,3.7,1,4.8l8.9,5.9c2.7,1.8,5.8,2.7,9,2.7h14.1c5,0,9.1-4,9.3-9,2.1-1.7,3.5-4.3,3.5-7.2s0-1.3-.2-1.9c2.2-1.7,3.7-4.4,3.7-7.4s-.1-1.9-.4-2.7c1.7-1.7,2.7-4,2.7-6.6,0-5.1-4.1-9.3-9.3-9.3h-13.4c.7-1.5,1.3-3.1,1.7-4.7l.8-2.9c1.6-5.5-1.6-11.3-7.1-12.9h0ZM19.2,40.7c-2.6,0-4.6,2.1-4.6,4.6v32.4c0,2.6,2.1,4.6,4.6,4.6h9.3c2.6,0,4.6-2.1,4.6-4.6v-32.4c0-2.6-2.1-4.6-4.6-4.6h-9.3Z"
        ></path>
      </svg>
      <svg
        className="absolute opacity-100 peer-checked:opacity-0 transition-all duration-100 ease-in-out top-4 right-4 fill-black w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
      >
        <path
          className="cls-1"
          d="M61.4,18c-5.5-1.6-11.3,1.6-12.9,7.1l-.8,2.9c-.5,1.9-1.5,3.6-2.8,5.1l-7.4,8.2c-1.3,1.4-1.2,3.6.2,4.9s3.6,1.2,4.9-.2l7.4-8.2c2-2.2,3.5-4.9,4.4-7.8l.8-2.9c.5-1.8,2.4-2.9,4.3-2.4s2.9,2.4,2.4,4.3l-.8,2.9c-.8,2.9-2.1,5.6-3.8,8-.8,1.1-.8,2.4-.2,3.6s1.8,1.9,3.1,1.9h19.3c1.3,0,2.3,1,2.3,2.3s-.6,1.8-1.5,2.2c-1.1.4-1.9,1.3-2.2,2.4s0,2.3.8,3.1c.4.4.6.9.6,1.5,0,1.1-.8,2.1-1.9,2.3-1.2.2-2.2,1.1-2.6,2.2s-.2,2.4.5,3.4c.3.4.5.9.5,1.4,0,1-.6,1.8-1.5,2.2-1.7.7-2.6,2.4-2.1,4.2,0,.2,0,.4,0,.6,0,1.3-1,2.3-2.3,2.3h-14.1c-1.8,0-3.6-.5-5.1-1.5l-8.9-5.9c-1.6-1.1-3.7-.6-4.8,1s-.6,3.7,1,4.8l8.9,5.9c2.7,1.8,5.8,2.7,9,2.7h14.1c5,0,9.1-4,9.3-9,2.1-1.7,3.5-4.3,3.5-7.2s0-1.3-.2-1.9c2.2-1.7,3.7-4.4,3.7-7.4s-.1-1.9-.4-2.7c1.7-1.7,2.7-4,2.7-6.6,0-5.1-4.1-9.3-9.3-9.3h-13.4c.7-1.5,1.3-3.1,1.7-4.7l.8-2.9c1.6-5.5-1.6-11.3-7.1-12.9h0ZM19.2,40.7c-2.6,0-4.6,2.1-4.6,4.6v32.4c0,2.6,2.1,4.6,4.6,4.6h9.3c2.6,0,4.6-2.1,4.6-4.6v-32.4c0-2.6-2.1-4.6-4.6-4.6h-9.3Z"
        ></path>
      </svg>
    </label>
  </div>
);

export default Toggle_task;

{
  /* */
}
