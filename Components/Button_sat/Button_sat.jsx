import React from "react";
import styles from "./Button_sat.module.css";

const Button_sat = () => (
  <div>
    <div className={styles["btn-container"]}>
      <button className={styles["button"]}>
        <span>Join Today </span>
        <svg
          viewBox="0 0 48 48"
          height="1.2em"
          width="1.2em"
          className={styles["svg"]}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42 24H6m24-12l12 12l-12 12"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Button_sat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_sat = () => (
         <div>
          <div className="btn-container">
  <button className="button">
    <span>Join Today </span>
    <svg
      viewBox="0 0 48 48"
      height="1.2em"
      width="1.2em"
      className="svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42 24H6m24-12l12 12l-12 12"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        fill="none"
      ></path>
    </svg>
  </button>
</div>
        </div>
        );

        export default Button_sat;
        
        
         */
}
