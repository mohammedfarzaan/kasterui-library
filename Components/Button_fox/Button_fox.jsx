import React from "react";
import styles from "./Button_fox.module.css";

const Button_fox = () => (
  <div>
    <button className={styles["pushable"]}>
      <span className={styles["shadow"]}></span>
      <span className={styles["front"]}>
        Join Today
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M6 12H18M18 12L13 7M18 12L13 17"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_fox;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_fox = () => (
         <div>
          <button className="pushable">
  <span className="shadow"></span>
  <span className="front"
    >Join Today
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </span>
</button>
        </div>
        );

        export default Button_fox;
        
        
         */
}
