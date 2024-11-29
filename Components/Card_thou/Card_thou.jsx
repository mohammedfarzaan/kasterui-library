import React from "react";
import styles from "./Card_thou.module.css";

const Card_thou = () => (
  <div>
    <div className={styles["notifications-container"]}>
      <div className={styles["alert"]}>
        <div className={styles["flex"]}>
          <div className={styles["flex-shrink-0"]}>
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={styles["h-5"] + styles["w-5"] + styles["alert-svg"]}
            >
              <path
                clipRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={styles["alert-prompt-wrap"]}>
            <p className={styles["text-sm"] + styles["text-yellow-700"]}>
              Your trial 18 years of life has expired. Continue by working your
              sweat off or
              <a className={styles["alert-prompt-link"]} href="#">
                Upgrade To Premium
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_thou;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_thou = () => (
         <div>
          <div className="notifications-container">
  <div className="alert">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 alert-svg">
          <path clipRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path>
        </svg>
      </div>
      <div className="alert-prompt-wrap">
        <p className="text-sm text-yellow-700">
          Your trial 18 years of life has expired. Continue by working your sweat off or 
          <a className="alert-prompt-link" href="#">Upgrade To Premium</a>
        </p>
    </div>
  </div>
  </div>
</div>
        </div>
        );

        export default Card_thou;
        
        
         */
}
