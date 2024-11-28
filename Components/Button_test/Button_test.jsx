import React from "react";
import styles from "./Button_test.module.css";

const Button_test = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["text"]}>
        <svg viewBox="0 0 24 24" height="22px" width="22px">
          <g fill="none">
            <path
              d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z"
              strokeWidth="1.5"
              stroke="currentColor"
            ></path>
            <path
              d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        Send Message
      </span>
    </button>
  </div>
);

export default Button_test;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_test = () => (
         <div>
          <button className="button">
  <span className="text">
    <svg viewBox="0 0 24 24" height="22px" width="22px">
      <g fill="none">
        <path
          d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z"
          strokeWidth="1.5"
          stroke="currentColor"
        ></path>
        <path
          d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
    Send Message
  </span>
</button>
        </div>
        );

        export default Button_test;
        
        
         */
}
