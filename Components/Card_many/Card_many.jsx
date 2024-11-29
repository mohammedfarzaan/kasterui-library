import React from "react";

const Card_many = () => (
  <div>
    <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
      <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">
        Your Message Sent Successfully
      </h3>
      <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
      <p className="text-gray-500 mb-10 text-base leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <button className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
            Cancel
          </button>
        </div>
        <div className="flex-1">
          <button className="bg-blue-500 whitespace-nowrap border-blue-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_many;

{
  /* */
}
