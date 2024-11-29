import React from "react";

const Input_cowboy = () => (
  <div>
    <div className="relative w-2/3 -mt-20">
      <input
        className="w-full peer z-[21] px-6 py-4 rounded-xl outline-none duration-200 ring-2 ring-[transparent] focus:ring-[#11BE86]"
        color="white"
        size="xl"
        placeholder="Focus me"
      />
      <div className="opacity-0 -translate-y-2 peer-focus:translate-y-0 pointer-events-none peer-focus:pointer-events-auto duration-200 peer-focus:opacity-100 absolute top-16 w-full z-[500] left-0 rounded-xl border border-white-222 p-4 bg-white shadow-lg">
        <p className="font-semibold text-xs text-[#5D5D5F]">LAST SEARCHES</p>
        <ul className="flex gap-2 flex-col mt-2">
          <li className="px-2 cursor-pointer text-sm hover:bg-green-100 py-2 rounded-lg">
            Something you've searched before
          </li>
          <li className="px-2 cursor-pointer text-sm hover:bg-green-100 py-2 rounded-lg">
            Something you've searched before
          </li>
        </ul>

        <p className="font-semibold text-xs text-[#5D5D5F] mt-4">
          EXTENDED SEARCHES
        </p>
        <ul className="flex gap-2 mt-4">
          <li className="grid grid-cols-10 cursor-pointer border border-[#E7EDFB] rounded-xl overflow-hidden group">
            <div className="col-span-3 overflow-hidden">
              <p className="text-green-300 mt-10 ml-2">YOUR IMAGE HERE</p>
            </div>
            <div className="col-span-7 p-3 flex flex-col justify-between">
              <h4 className="text-base duration-200 group-hover:text-[#11BE86] font-medium text-black line-clamp-2">
                Your text here
              </h4>
              <div className="flex justify-between items-center mt-4">
                <p className="flex text-sm gap-2 text-[#9A999B] items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    ></path>
                  </svg>
                  18.04.2024
                </p>
                <p className="flex text-sm gap-1 text-[#9A999B] items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                  806
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Input_cowboy;

{
  /* */
}
