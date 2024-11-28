import React from "react";
import styles from "./Button_size.module.css";

const Button_size = () => (
  <div>
    <div className={styles["hamburger"]}>
      <input className={styles["checkbox"]} type="checkbox" />
      <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
        <path
          className="lineTop line"
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 11L44 11"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 24H43"
          className="lineMid line"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 37H43"
          className="lineBottom line"
        ></path>
      </svg>
    </div>
  </div>
);

export default Button_size;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_size = () => (
         <div>
          <div className="hamburger">
  <input className="checkbox" type="checkbox" />
  <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
    <path
      className="lineTop line"
      strokeLinecap="round"
      strokeWidth="4"
      stroke="black"
      d="M6 11L44 11"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="black"
      d="M6 24H43"
      className="lineMid line"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="black"
      d="M6 37H43"
      className="lineBottom line"
    ></path>
  </svg>
</div>
        </div>
        );

        export default Button_size;
        
        
         */
}
