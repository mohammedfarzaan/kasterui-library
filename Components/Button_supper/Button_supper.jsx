import React from "react";
import styles from "./Button_supper.module.css";

const Button_supper = () => (
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
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              stroke-width="1.2"
              stroke="#ffffff"
              d="M13 7L18.5 12.5L13 18M18.5 12.5H6"
            ></path>
          </g>
        </svg>
      </div>
    </button>
  </div>
);

export default Button_supper;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_supper = () => (
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
      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
      <g
        stroke-linejoin="round"
        stroke-linecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          stroke-width="1.2"
          stroke="#ffffff"
          d="M13 7L18.5 12.5L13 18M18.5 12.5H6"
        ></path>
      </g>
    </svg>
  </div>
</button>
        </div>
        );

        export default Button_supper;
        
        
         */
}
