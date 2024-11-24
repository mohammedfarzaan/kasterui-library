import React from "react";
import styles from "./Button_calm.module.css";

const Button_calm = () => (
  <div>
    <div className={styles["hamburger"]}>
      <input className={styles["checkbox"]} type="checkbox" />
      <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
        <path
          className={styles["lineTop"] + styles["line"]}
          stroke-linecap="round"
          stroke-width="4"
          stroke="black"
          d="M6 11L44 11"
        ></path>
        <path
          stroke-linecap="round"
          stroke-width="4"
          stroke="black"
          d="M6 24H43"
          className={styles["lineMid"] + styles["line"]}
        ></path>
        <path
          stroke-linecap="round"
          stroke-width="4"
          stroke="black"
          d="M6 37H43"
          className={styles["lineBottom"] + styles["line"]}
        ></path>
      </svg>
    </div>
  </div>
);

export default Button_calm;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_calm = () => (
         <div>
          <div className="hamburger">
  <input className="checkbox" type="checkbox" />
  <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
    <path
      className="lineTop line"
      stroke-linecap="round"
      stroke-width="4"
      stroke="black"
      d="M6 11L44 11"
    ></path>
    <path
      stroke-linecap="round"
      stroke-width="4"
      stroke="black"
      d="M6 24H43"
      className="lineMid line"
    ></path>
    <path
      stroke-linecap="round"
      stroke-width="4"
      stroke="black"
      d="M6 37H43"
      className="lineBottom line"
    ></path>
  </svg>
</div>
        </div>
        );

        export default Button_calm;
        
        
         */
}
