import React from "react";

const Card_blood = () => (
  <div>
    <div className="bg-white w-48 h-64 rounded-lg">
      <div className="flex p-2 gap-1">
        <div class="">
          <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <div className="card__content"></div>
    </div>
  </div>
);

export default Card_blood;

{
  /* */
}
