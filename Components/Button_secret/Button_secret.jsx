import React from "react";
import styles from "./Button_secret.module.css";

const Button_secret = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["btn__icon"]}>
        <svg
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
          <path d="M9 15l3 -3l3 3"></path>
          <path d="M12 12l0 9"></path>
        </svg>
      </span>
      <span className={styles["btn__text"]}>Upload</span>
    </button>
  </div>
);

export default Button_secret;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_secret = () => (
         <div>
          <button className="button">
            <span className="btn__icon">
                <svg strokeLinejoin="round" strokeLinecap="round" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                    <path d="M9 15l3 -3l3 3"></path>
                    <path d="M12 12l0 9"></path>
                </svg>
            </span>
            <span className="btn__text">Upload</span>
        </button>
        </div>
        );

        export default Button_secret;
        
        
         */
}
