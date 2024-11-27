import React from "react";
import styles from "./Button_met.module.css";

const Button_met = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        height="40"
        width="40"
        className="button__icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
        <path d="M7 11l5 5l5 -5"></path>
        <path d="M12 4l0 12"></path>
      </svg>
      <span className={styles["button__text"]}>Download</span>
    </button>
  </div>
);

export default Button_met;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_met = () => (
         <div>
          <button className="button">
  <svg
    strokeLinejoin="round"
    strokeLinecap="round"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    height="40"
    width="40"
    className="button__icon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
    <path d="M7 11l5 5l5 -5"></path>
    <path d="M12 4l0 12"></path>
  </svg>
  <span className="button__text">Download</span>
</button>
        </div>
        );

        export default Button_met;
        
        
         */
}
