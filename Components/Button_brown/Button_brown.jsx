import React from "react";
import styles from "./Button_brown.module.css";

const Button_brown = () => (
  <div>
    <button className={styles["button"]}>
      <div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={
            styles["w-6"] +
            styles["h-6"] +
            styles["text-gray-800"] +
            styles["dark:text-white"]
          }
        >
          <path
            d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
          ></path>
        </svg>
        Send Message
      </div>
    </button>
  </div>
);

export default Button_brown;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_brown = () => (
         <div>
          <button className="button">
  <div>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-6 h-6 text-gray-800 dark:text-white"
    >
      <path
        d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
      ></path>
    </svg>
    Send Message
  </div>
</button>
        </div>
        );

        export default Button_brown;
        
        
         */
}
