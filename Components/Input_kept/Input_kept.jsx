import React from "react";

const Input_kept = () => (
  <div>
    <div className="relative mt-6">
      <input
        type="email"
        placeholder="Email address"
        autocomplete="email"
        aria-label="Email address"
        className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
      />
      <div className="absolute inset-y-1 right-1 flex justify-end">
        <button
          type="submit"
          aria-label="Submit"
          className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
        >
          <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 3 10 .5v2H0v1h10v2L16 3Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Input_kept;

{
  /* */
}
