import React from "react";
import styles from "./Button_eager.module.css";

const Button_eager = () => (
  <div>
    <button
      aria-label="Send Message"
      className={
        styles["button"] +
        styles["relative"] +
        styles["overflow-hidden"] +
        styles["flex"] +
        styles["items-center"] +
        styles["px-6"] +
        styles["py-3"] +
        styles["bg-gradient-to-r"] +
        styles["from-blue-500"] +
        styles["to-purple-600"] +
        styles["border"] +
        styles["border-transparent"] +
        styles["rounded-full"] +
        styles["shadow-lg"] +
        styles["text-white"] +
        styles["cursor-pointer"] +
        styles["transition-all"] +
        styles["duration-300"] +
        styles["ease-in-out"] +
        styles["transform"] +
        styles["hover:scale-105"] +
        styles["focus:outline-none"] +
        styles["focus:ring-4"] +
        styles["focus:ring-blue-300"] +
        styles["focus:ring-opacity-50"] +
        styles["focus:scale-105"] +
        styles["active:scale-95"]
      }
    >
      <div className={styles["ripple"]}></div>
      <svg
        className={
          styles["relative"] +
          styles["w-12"] +
          styles["h-12"] +
          styles["mr-2"] +
          styles["z-10"] +
          styles["transition-transform"] +
          styles["duration-300"] +
          styles["ease-in-out"] +
          styles["transform"] +
          styles["hover:rotate-12"] +
          styles["shadow-sm"] +
          styles["transition-colors"] +
          styles["duration-300"] +
          styles["ease-in-out"]
        }
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 36.000000 75.000000"
        height="80pt"
        width="80pt"
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
      >
        <g
          stroke="none"
          fill="#ffffff"
          transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
        >
          <path d="M188 481 c-42 -15 -84 -34 -93 -41 -27 -22 -14 -53 31 -74 30 -14 46  -30 60 -60 23 -50 55 -59 78 -24 24 36 56 137 56 174 0 23 -6 37 -19 44 -25 13 -23 13 -113 -19z m110 -20 c4 -28 -37 -158 -55 -173 -17 -14 -39 4 -48 39 -4 19 0 35 14 54 30 41 26 47 -9 14 -30 -29 -30 -29 -65 -12 -58 28 -47 42 65 81 41 14 80 24 85 22 6 -1 11 -13 13 -25z"></path>
        </g>
      </svg>
      <svg
        className={
          styles["relative"] +
          styles["w-8"] +
          styles["h-8"] +
          styles["mr-2"] +
          styles["z-10"] +
          styles["transition-transform"] +
          styles["duration-300"] +
          styles["ease-in-out"] +
          styles["transform"] +
          styles["hover:rotate-12"] +
          styles["shadow-sm"] +
          styles["transition-colors"] +
          styles["duration-300"] +
          styles["ease-in-out"]
        }
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 36.000000 75.000000"
        height="80pt"
        width="80pt"
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
      >
        <g
          stroke="none"
          fill="#ffffff"
          transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
        >
          <path d="M100 300 l0 -300 30 0 30 0 0 300 0 300 -30 0 -30 0 0 -300z"></path>
        </g>
      </svg>
      <span
        className={
          styles["relative"] +
          styles["z-10"] +
          styles["font-semibold"] +
          styles["text-lg"] +
          styles["transition-all"] +
          styles["duration-300"] +
          styles["ease-in-out"]
        }
      >
        Send Message
      </span>
    </button>
  </div>
);

export default Button_eager;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_eager = () => (
         <div>
          <button
  aria-label="Send Message"
  className="button relative overflow-hidden flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 border border-transparent rounded-full shadow-lg text-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 focus:scale-105 active:scale-95"
>
  <div className="ripple"></div>
  <svg
    className="relative w-12 h-12 mr-2 z-10 transition-transform duration-300 ease-in-out transform hover:rotate-12 shadow-sm transition-colors duration-300 ease-in-out"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 36.000000 75.000000"
    height="80pt"
    width="80pt"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
  >
    <g
      stroke="none"
      fill="#ffffff"
      transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
    >
      <path
        d="M188 481 c-42 -15 -84 -34 -93 -41 -27 -22 -14 -53 31 -74 30 -14 46  -30 60 -60 23 -50 55 -59 78 -24 24 36 56 137 56 174 0 23 -6 37 -19 44 -25 13 -23 13 -113 -19z m110 -20 c4 -28 -37 -158 -55 -173 -17 -14 -39 4 -48 39 -4 19 0 35 14 54 30 41 26 47 -9 14 -30 -29 -30 -29 -65 -12 -58 28 -47 42 65 81 41 14 80 24 85 22 6 -1 11 -13 13 -25z"
      ></path>
    </g>
  </svg>
  <svg
    className="relative w-8 h-8 mr-2 z-10 transition-transform duration-300 ease-in-out transform hover:rotate-12 shadow-sm transition-colors duration-300 ease-in-out"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 36.000000 75.000000"
    height="80pt"
    width="80pt"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
  >
    <g
      stroke="none"
      fill="#ffffff"
      transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
    >
      <path
        d="M100 300 l0 -300 30 0 30 0 0 300 0 300 -30 0 -30 0 0 -300z"
      ></path>
    </g>
  </svg>
  <span
    className="relative z-10 font-semibold text-lg transition-all duration-300 ease-in-out"
    >Send Message</span
  >
</button>
        </div>
        );

        export default Button_eager;
        
        
         */
}
