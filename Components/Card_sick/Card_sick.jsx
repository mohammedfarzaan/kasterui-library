import React from "react";

const Card_sick = () => (
  <div>
    <div style="scale: 1;" className="dark m-10 w-full md:w-1/2 lg:w-1/3 px-3">
      <div className="rounded-xl relative z-10 border border-primary border-opacity-20 shadow-pricing grid py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
        <span
          style="color: rgb(255, 177, 44);"
          className="text-primary font-semibold text-lg block mb-4"
        >
          Business
        </span>
        <h2 className="font-bold text-dark mb-5 text-[42px]">
          $59
          <span className="text-base text-body-color font-medium">/ month</span>
        </h2>
        <p className="text-base text-body-color pb-8 border-b border-foreground border-opacity-20">
          Perfect for business usage.
        </p>
        <ul role="list" className="my-7 space-y-5">
          <li className="flex items-center">
            <svg
              style={{ color: "rgb(255, 177, 44)" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
            </svg>
            <span className="font-normal leading-tight ms-3 text-base text-gray-500 dark:text-gray-400">
              Launch 2 Attack(s) same time
            </span>
          </li>
          <li className="flex items-center">
            <svg
              style={{ color: "rgb(255, 177, 44)" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
            </svg>
            <span className="font-normal leading-tight ms-3 text-base text-gray-500 dark:text-gray-400">
              Customize location
            </span>
          </li>
          <li className="flex items-center">
            <svg
              style={{ color: "rgb(255, 177, 44)" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
            </svg>
            <span className="font-normal leading-tight ms-3 text-base text-gray-500 dark:text-gray-400">
              Customize devices
            </span>
          </li>
          <li className="flex decoration-gray-500 line-through">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 h-4 w-4 dark:text-gray-500 text-gray-400"
              aria-hidden="true"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
            </svg>
            <span className="font-normal leading-tight ms-3 text-base text-gray-500">
              Enable proxies
            </span>
          </li>
        </ul>
        <button
          style={{ backgroundColor: "rgb(255, 177, 44)" }}
          type="button"
          className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary data-[hover=true]:opacity-hover text-background"
        >
          Subscribe
        </button>
        <span className="absolute right-0 top-7 z-[-1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 77 172"
            height="172"
            width="77"
          >
            <circle fill="url(#paint0_linear)" r="86" cy="86" cx="86"></circle>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="172"
                x2="86"
                y1="0"
                x1="86"
                id="paint0_linear"
              >
                <stop stop-opacity="0.09" stop-color="#3056D3"></stop>
                <stop stop-opacity="0" stop-color="#C4C4C4" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-4 top-4 z-[-1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 41 89"
            height="89"
            width="41"
          >
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 87.4849)"
              r="1.42021"
              cy="87.4849"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 74.9871)"
              r="1.42021"
              cy="74.9871"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 62.4892)"
              r="1.42021"
              cy="62.4892"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 38.3457)"
              r="1.42021"
              cy="38.3457"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 13.634)"
              r="1.42021"
              cy="13.634"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 50.2754)"
              r="1.42021"
              cy="50.2754"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 26.1319)"
              r="1.42021"
              cy="26.1319"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 38.9138 1.42021)"
              r="1.42021"
              cy="1.42021"
              cx="38.9138"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 87.4849)"
              r="1.42021"
              cy="87.4849"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 74.9871)"
              r="1.42021"
              cy="74.9871"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 62.4892)"
              r="1.42021"
              cy="62.4892"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 38.3457)"
              r="1.42021"
              cy="38.3457"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 13.634)"
              r="1.42021"
              cy="13.634"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 50.2754)"
              r="1.42021"
              cy="50.2754"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 26.1319)"
              r="1.42021"
              cy="26.1319"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 26.4157 1.4202)"
              r="1.42021"
              cy="1.4202"
              cx="26.4157"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 87.4849)"
              r="1.42021"
              cy="87.4849"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 74.9871)"
              r="1.42021"
              cy="74.9871"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 62.4892)"
              r="1.42021"
              cy="62.4892"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 38.3457)"
              r="1.42021"
              cy="38.3457"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 13.634)"
              r="1.42021"
              cy="13.634"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 50.2754)"
              r="1.42021"
              cy="50.2754"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 26.1319)"
              r="1.42021"
              cy="26.1319"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 13.9177 1.42019)"
              r="1.42021"
              cy="1.42019"
              cx="13.9177"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 87.4849)"
              r="1.42021"
              cy="87.4849"
              cx="1.41963"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 74.9871)"
              r="1.42021"
              cy="74.9871"
              cx="1.41963"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 62.4892)"
              r="1.42021"
              cy="62.4892"
              cx="1.41963"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 38.3457)"
              r="1.42021"
              cy="38.3457"
              cx="1.41963"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 13.634)"
              r="1.42021"
              cy="13.634"
              cx="1.41963"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 50.2754)"
              r="1.42021"
              cy="50.2754"
              cx="1.41963"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 26.1319)"
              r="1.42021"
              cy="26.1319"
              cx="1.41963"
            ></circle>
            <circle
              fill="#3056D3"
              transform="rotate(180 1.41963 1.4202)"
              r="1.42021"
              cy="1.4202"
              cx="1.41963"
            ></circle>
          </svg>
        </span>
      </div>
    </div>
  </div>
);

export default Card_sick;

{
  /* */
}
