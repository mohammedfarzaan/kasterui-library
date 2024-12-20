import React from "react";

const Card_adult = () => (
  <div>
    <div className="card font-sans bg-white rounded-lg overflow-hidden w-96 transform transition duration-500 hover:shadow-2xl">
      <div className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <div className="flex justify-between items-center">
          <div className="text-lg font-montserrat font-bold">Social Media</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <svg
                className="w-6 h-6 scale-100 ease-out transistion duration-300 hover:scale-75"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .592 0 1.326v21.348C0 23.406.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.896-4.788 4.66-4.788 1.325 0 2.462.099 2.794.143v3.239h-1.918c-1.505 0-1.795.716-1.795 1.764v2.315h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .592 23.408 0 22.675 0"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg
                className="w-6 h-6 w-6 h-6 scale-100 ease-out transistion duration-300 hover:scale-75"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.93 4.93 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.524 6.574 4.902 4.902 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.95 4.89a4.932 4.932 0 01-2.224.084c.623 1.941 2.432 3.355 4.578 3.396A9.867 9.867 0 010 21.543a13.933 13.933 0 007.548 2.209c9.058 0 14.01-7.503 14.01-14.01 0-.213 0-.426-.015-.637a10.012 10.012 0 002.457-2.548l-.047-.02z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg
                className="w-6 h-6 w-6 h-6 scale-100 ease-out transistion duration-300 hover:scale-75"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.004 2.029C6.475 2.029 2.005 6.499 2.005 12.027c0 4.432 2.869 8.19 6.84 9.514.5.092.684-.217.684-.482 0-.24-.008-.874-.013-1.716-2.782.606-3.37-1.34-3.37-1.34-.454-1.152-1.11-1.459-1.11-1.459-.907-.62.069-.607.069-.607 1.003.071 1.532 1.03 1.532 1.03.89 1.526 2.337 1.085 2.906.83.091-.646.35-1.085.636-1.334-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.029-2.682-.103-.253-.447-1.273.098-2.655 0 0 .84-.268 2.75 1.026A9.55 9.55 0 0112 6.856a9.55 9.55 0 012.506.338c1.908-1.294 2.746-1.026 2.746-1.026.547 1.382.203 2.402.1 2.655.64.699 1.027 1.591 1.027 2.682 0 3.842-2.339 4.685-4.566 4.934.36.31.68.922.68 1.856 0 1.34-.012 2.421-.012 2.75 0 .267.181.579.689.48 3.973-1.325 6.837-5.083 6.837-9.514 0-5.528-4.471-9.998-9.996-9.998z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 font-montserrat">
        <div className="text-black text-xl font-bold mb-2">
          Advanced 3D Card
        </div>
        <div className="text-gray-700 mb-4">
          This card showcases complex animations and 3D effects using Tailwind
          CSS. Hover to see the interaction!
        </div>
        <a
          href="#"
          className="inline-block font-mono text-sm font-bold bg-slate-500 text-white py-2 px-4 rounded-full transition duration-100 transform hover:opacity-75"
        >
          Learn More
        </a>
      </div>
      <div className="p-4 bg-gray-100 text-center">
        <div className="text-gray-600 font-mono text-sm">
          © 2024 Your Company
        </div>
      </div>
    </div>
  </div>
);

export default Card_adult;

{
  /* */
}
