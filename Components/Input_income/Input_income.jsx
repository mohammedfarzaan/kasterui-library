import React from "react";

const Input_income = () => (
  <div>
    <div className="w-64 h-14 relative flex items-center shadow-[0px_5px_15px_rgba(0,0,0,0.03)]">
      <input
        required=""
        className="peer w-full h-full bg-white text-lg font-light placeholder-slate-400 contrast-more:placeholder-slate-500 border border-slate-200 outline-none rounded-lg focus:border-indigo-400 valid:border-indigo-400 focus:ring-indigo-400 valid:ring-indigo-400 focus:ring-1 valid:ring-1 px-3"
        placeholder="Enter your password"
        type="text"
      />
      <div className="w-5 absolute block peer-valid:hidden right-3 opacity-20 peer-focus:opacity-70 peer-valid:opacity-70 peer-valid:fill-indigo-500">
        <svg
          viewBox="0 0 24 24"
          id="Outline"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"></path>
        </svg>
      </div>
      <div className="w-5 absolute hidden peer-valid:block right-3 opacity-20 peer-focus:opacity-70 peer-valid:opacity-70 peer-valid:fill-indigo-500">
        <svg
          viewBox="0 0 24 24"
          id="Outline"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"></path>
          <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Input_income;

{
  /* */
}
