import React from "react";
import styles from "./Button_until.module.css";

const Button_until = () => (
  <div>
    <div className={styles["btn-container"]}>
      <button className={styles["button"]}>
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

export default Button_until;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_until = () => (
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

        export default Button_until;
        
        
         */
}
