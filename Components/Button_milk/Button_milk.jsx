import React from "react";
import styles from "./Button_milk.module.css";

const Button_milk = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["msg"]}>
        <p>
          <span style="--i:0">J</span>
          <span style="--i:1">o</span>
          <span style="--i:2">i</span>
          <span style="--i:3">n</span>
          <span>&nbsp;</span>
          <span style="--i:4">T</span>
          <span style="--i:5">o</span>
          <span style="--i:6">d</span>
          <span style="--i:7">a</span>
          <span style="--i:8">y</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 25"
          className={styles["arrow"]}
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              strokeWidth="1.2"
              stroke="#ffffff"
              d="M13 7L18.5 12.5L13 18M18.5 12.5H6"
            ></path>
          </g>
        </svg>
      </div>
    </button>
  </div>
);

export default Button_milk;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_milk = () => (
         <div>
          <button className="button">
  <div className="msg">
    <p>
      <span style="--i:0">J</span>
      <span style="--i:1">o</span>
      <span style="--i:2">i</span>
      <span style="--i:3">n</span>
      <span>&nbsp;</span>
      <span style="--i:4">T</span>
      <span style="--i:5">o</span>
      <span style="--i:6">d</span>
      <span style="--i:7">a</span>
      <span style="--i:8">y</span>
    </p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      className="arrow"
    >
      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          strokeWidth="1.2"
          stroke="#ffffff"
          d="M13 7L18.5 12.5L13 18M18.5 12.5H6"
        ></path>
      </g>
    </svg>
  </div>
</button>
        </div>
        );

        export default Button_milk;
        
        
         */
}
