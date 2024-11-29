import React from "react";
import styles from "./Button_wheel.module.css";

const Button_wheel = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        height="24"
        fill="none"
        className={styles["svg-icon"]}
      >
        <g strokeWidth="2" strokeLinecap="round" stroke="#ff342b">
          <rect y="3" x="9" width="6" rx="3" height="11"></rect>
          <path d="m12 18v3"></path>
          <path d="m8 21h8"></path>
          <path d="m19 11c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Record</span>
    </button>
  </div>
);

export default Button_wheel;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wheel = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="svg-icon"><g strokeWidth="2" strokeLinecap="round" stroke="#ff342b"><rect y="3" x="9" width="6" rx="3" height="11"></rect><path d="m12 18v3"></path><path d="m8 21h8"></path><path d="m19 11c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7"></path></g></svg>
  <span className="lable">Record</span>
</button>
        </div>
        );

        export default Button_wheel;
        
        
         */
}
