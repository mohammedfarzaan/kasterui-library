import React from "react";

const Card_myself = () => (
  <div>
    <div className="p-4 w-[300px] rounded-lg border dark:border-gray-800">
      <h1 className="text-2xl font-bold">History</h1>
      <div className="grid gap-4 mt-2">
        <div className="flex gap-2 items-center">
          <div className="bg-red-500 w-20 h-10 rounded"></div>
          <div className="grid gap-1 text-sm flex-1">
            <h2 className="font-semibold leading-none line-clamp-2">
              Introducing the frontend cloud
            </h2>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              1.2M views
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-yellow-500 w-20 h-10 rounded"></div>
          <div className="grid gap-1 text-sm flex-1">
            <h2 className="font-semibold leading-none line-clamp-2">
              Using Vercel KV with Svelte
            </h2>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              21K views
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-blue-500 w-20 h-10 rounded"></div>
          <div className="grid gap-1 text-sm flex-1">
            <h2 className="font-semibold leading-none line-clamp-2">
              Loading UI with Next.js 13
            </h2>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              12K views
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_myself;

{
  /* */
}
