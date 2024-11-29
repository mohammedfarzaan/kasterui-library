import React from "react";
import styles from "./Button_tone.module.css";

const Button_tone = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["bg"]}>
        Join Today
        <svg width="1.2em" height="1.2em" viewBox="0 0 48 48">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M42 24H6m24-12l12 12l-12 12"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_tone;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tone = () => (
         <div>
          <button className="button">
  <span className="bg">
    Join Today
    <svg width="1.2em" height="1.2em" viewBox="0 0 48 48">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M42 24H6m24-12l12 12l-12 12"
      ></path>
    </svg>
  </span>
</button>
        </div>
        );

        export default Button_tone;
        
        
         */
}
