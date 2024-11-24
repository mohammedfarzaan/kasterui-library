import React from "react";
import styles from "./Button_sugar.module.css";

const Button_sugar = () => (
  <div>
    <button className={styles["button"]}>
      <span>Join Today</span>

      <svg
        className={styles["icon"]}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_sugar;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_sugar = () => (
         <div>
          <button className="button">
  <span>Join Today</span>

  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
</button>
        </div>
        );

        export default Button_sugar;
        
        
         */
}
