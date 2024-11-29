import React from "react";

const Card_melted = () => (
  <div>
    <div className="w-72 h-40 flex flex-col justify-center gap-2 bg-neutral-50 rounded-lg shadow p-2">
      <div className="flex gap-2">
        <img className="bg-neutral-500 w-24 h-24 shrink-0 rounded-lg" alt="" />
        <div className="flex flex-col">
          <span className="font-bold text-neutral-700 italic">Card title</span>
          <p className="line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            dolor augue. Nunc dictum erat sit amet iaculis interdum. Ut neque
            tellus, congue vel lectus aliquam, dignissim porttitor velit.
          </p>
        </div>
      </div>
      <button className="hover:bg-indigo-700 bg-indigo-500 font-bold text-neutral-50 rounded p-2">
        See more
      </button>
    </div>
  </div>
);

export default Card_melted;

{
  /* */
}
