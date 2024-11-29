import React from "react";
import styles from "./Toggle_wild.module.css";

const Toggle_wild = () => (
  <div>
    <div className={styles["container"]}>
      <label className={styles["switch"]}>
        <input type="checkbox" />
        <span className={styles["slider"]}>
          <span className={styles["title"]}>Play</span>
          <span className={styles["ball"]}>
            <span className={styles["icon"]}>
              <svg
                className={
                  styles["w-6"] +
                  styles["h-6"] +
                  styles["text-gray-800"] +
                  styles["dark:text-white"]
                }
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 18V6l8 6-8 6Z"
                ></path>
              </svg>
            </span>
          </span>
        </span>
      </label>
    </div>
  </div>
);

export default Toggle_wild;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_wild = () => (
         <div>
          <div className="container">
  <label className="switch">
    <input type="checkbox" />
    <span className="slider">
      <span className="title">Play</span>
      <span className="ball">
        <span className="icon">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 18V6l8 6-8 6Z"
            ></path>
          </svg>
        </span>
      </span>
    </span>
  </label>
</div>
        </div>
        );

        export default Toggle_wild;
        
        
         */
}
