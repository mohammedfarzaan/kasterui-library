import React from "react";
import styles from "./Loader_fallen.module.css";

const Loader_fallen = () => (
  <div>
    <svg
      className={styles["pl"]}
      viewBox="0 0 128 128"
      width="128px"
      height="128px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="hsl(193,90%,55%)"></stop>
          <stop offset="100%" stop-color="hsl(223,90%,55%)"></stop>
        </linearGradient>
      </defs>
      <circle
        className={styles["pl__ring"]}
        r="56"
        cx="64"
        cy="64"
        fill="none"
        stroke="hsla(0,10%,10%,0.1)"
        strokeWidth="16"
        strokeLinecap="round"
      ></circle>
      <path
        className={styles["pl__worm"]}
        d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
        fill="none"
        stroke="url(#pl-grad)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-dasharray="44 1111"
        stroke-dashoffset="10"
      ></path>
    </svg>
  </div>
);

export default Loader_fallen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fallen = () => (
         <div>
          <svg className="pl" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="hsl(193,90%,55%)"></stop>
            <stop offset="100%" stop-color="hsl(223,90%,55%)"></stop>
        </linearGradient>
    </defs>
    <circle className="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0,10%,10%,0.1)" strokeWidth="16" strokeLinecap="round"></circle>
    <path className="pl__worm" d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" fill="none" stroke="url(#pl-grad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" stroke-dasharray="44 1111" stroke-dashoffset="10"></path>
</svg>
        </div>
        );

        export default Loader_fallen;
        
        
         */
}
