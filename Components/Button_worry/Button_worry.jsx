import React from "react";
import styles from "./Button_worry.module.css";

const Button_worry = () => (
  <div>
    <button className={styles["button"]}>
      <i className={styles["icon"]}>
        <svg
          width="20px"
          height="20px"
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z"
            stroke="#000000"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.1999 9.12L9.41992 14.9"
            stroke="#000000"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </i>
      Send Message
    </button>
  </div>
);

export default Button_worry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_worry = () => (
         <div>
          <button className="button">
  <i className="icon"
    ><svg
      width="20px"
      height="20px"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z"
        stroke="#000000"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M15.1999 9.12L9.41992 14.9"
        stroke="#000000"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path></svg
  ></i>
  Send Message
</button>
        </div>
        );

        export default Button_worry;
        
        
         */
}
