import React from "react";
import styles from "./Button_price.module.css";

const Button_price = () => (
  <div>
    <button className={styles["button"]}>
      <span>Join Today</span>

      <svg
        className={styles["icon"]}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_price;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_price = () => (
         <div>
          <button className="button">
  <span>Join Today</span>

  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
</button>
        </div>
        );

        export default Button_price;
        
        
         */
}
