import React from "react";
import styles from "./Button_tube.module.css";

const Button_tube = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        height="24"
        fill="none"
        className="svg-icon"
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

export default Button_tube;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_tube = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="svg-icon"><g strokeWidth="2" strokeLinecap="round" stroke="#ff342b"><rect y="3" x="9" width="6" rx="3" height="11"></rect><path d="m12 18v3"></path><path d="m8 21h8"></path><path d="m19 11c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7"></path></g></svg>
  <span className="lable">Record</span>
</button>
        </div>
        );

        export default Button_tube;
        
        
         */
}
