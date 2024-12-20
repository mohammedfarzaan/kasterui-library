import React from "react";

const Card_jack = () => (
  <div>
    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 w-80">
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="items-center w-full justify-center grid grid-cols-1 text-left">
          <div>
            <h2 className="text-black font-bold text-lg lg:text-3xl">
              Corporate
            </h2>
            <p className="text-black tracking-tight xl:text-2xl mt-5">
              For those that want to grow steadily and buy pizza and burguers.
            </p>
          </div>
          <div className="mt-2">
            <p>
              <span className="text-black tracking-tight xl:text-4xl">$35</span>
              <span className="text-black font-medium text-base">/mo</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
            href="#"
          >
            Purchase
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Card_jack;

{
  /* */
}
