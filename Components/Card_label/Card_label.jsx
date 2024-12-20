import React from "react";

const Card_label = () => (
  <div>
    <div className="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Hello!
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-white">
            Hover Me (Love You Guys)
          </p>
          <p className="mt-2 text-gray-400">
            You're a monster. I can swallow a bottle of alcohol and I'll feel
            like Godzilla. Better hit the deck like the card dealer.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 space-x-4">
          <button
            style="margin-right: 20px"
            className="text-red-500 hover:text-white"
          >
            <svg
              id="heart"
              viewBox="0 0 47.5 47.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 38h38V0H0v38Z"></path>
                </clipPath>
              </defs>
              <g transform="matrix(1.25 0 0 -1.25 0 47.5)" clip-path="url(#a)">
                <path
                  d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241"
                  fill="#be1931"
                ></path>
              </g>
            </svg>
            Like
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_label;

{
  /* */
}
