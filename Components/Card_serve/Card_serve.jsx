import React from "react";

const Card_serve = () => (
  <div>
    <div className="bg-gray-100 max-w-sm mx-auto rounded shadow-md">
      <div className="text-center p-6">
        <p className="text-lg font-bold mb-0">
          Allow this device to access photos and videos?
        </p>
        <p className="text-sm mb-0">
          This device will be able to access photos and videos while it is
          connected to your iPhone.
        </p>
      </div>
      <div className="border-t border-gray-300 flex justify-center p-0">
        <div className="flex-1 text-center">
          <button
            className="text-blue-600 hover:bg-white hover:rounded-bl-md w-full py-2"
            type="button"
          >
            Allow
          </button>
        </div>
        <div className="border-l border-gray-300"></div>
        <div className="flex-1 text-center">
          <button
            className="text-blue-600 font-bold hover:bg-white hover:rounded-br-md w-full py-2"
            type="button"
          >
            Don't Allow
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_serve;

{
  /* */
}
