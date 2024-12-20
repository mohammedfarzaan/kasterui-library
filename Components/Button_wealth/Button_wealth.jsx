import React from "react";
import styles from "./Button_wealth.module.css";

const Button_wealth = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.25rem"
        height="1.25rem"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
      </svg>
      Create
    </button>
  </div>
);

export default Button_wealth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wealth = () => (
         <div>
          <button className="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25rem"
    height="1.25rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
  </svg>
  Create
</button>
        </div>
        );

        export default Button_wealth;
        
        
         */
}
