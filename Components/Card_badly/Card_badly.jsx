import React from "react";
import styles from "./Card_badly.module.css";

const Card_badly = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["no-image"]}>
        <svg
          className={styles["icon"]}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          ></path>
        </svg>
      </div>
      <div className={styles["content"]}>
        <p className={styles["name"]}>UIVERSE</p>
        <p className={styles["time"]}>03.04.2024 - 04.04.2024</p>
      </div>
    </div>
  </div>
);

export default Card_badly;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_badly = () => (
         <div>
          <div className="card">
  <div className="no-image">
    <svg
      className="icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
      ></path>
    </svg>
  </div>
  <div className="content">
    <p className="name">UIVERSE</p>
    <p className="time">03.04.2024 - 04.04.2024</p>
  </div>
</div>
        </div>
        );

        export default Card_badly;
        
        
         */
}
