import React from "react";
import styles from "./Button_water.module.css";

const Button_water = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["bg"]}>
        Join Today
        <svg width="1.2em" height="1.2em" viewBox="0 0 48 48">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M42 24H6m24-12l12 12l-12 12"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_water;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_water = () => (
         <div>
          <button className="button">
  <span className="bg">
    Join Today
    <svg width="1.2em" height="1.2em" viewBox="0 0 48 48">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="M42 24H6m24-12l12 12l-12 12"
      ></path>
    </svg>
  </span>
</button>
        </div>
        );

        export default Button_water;
        
        
         */
}
