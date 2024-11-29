import React from "react";
import styles from "./Button_occur.module.css";

const Button_occur = () => (
  <div>
    <button className={styles["rainbow-btn"]}>
      <div className={styles["content"]}>
        <svg
          viewBox="0 0 16 16"
          className={styles["bi"] + styles["bi-lightning-charge-fill"]}
          fill="currentColor"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
        </svg>
        Join now
      </div>
    </button>
  </div>
);

export default Button_occur;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_occur = () => (
         <div>
          <button className="rainbow-btn">
  <div className="content">
    <svg
      viewBox="0 0 16 16"
      className="bi bi-lightning-charge-fill"
      fill="currentColor"
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
      ></path>
    </svg>

    Join now
  </div>
</button>
        </div>
        );

        export default Button_occur;
        
        
         */
}
