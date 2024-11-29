import React from "react";
import styles from "./Button_thin.module.css";

const Button_thin = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="26px"
      >
        <path
          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_thin;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_thin = () => (
         <div>
          <button className="button">
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
</button>
        </div>
        );

        export default Button_thin;
        
        
         */
}
