import React from "react";
import styles from "./Card_truth.module.css";

const Card_truth = () => (
  <div>
    <div className={styles["cookies-card"]}>
      <p className={styles["cookie-heading"]}>Cookie Policy</p>
      <p className={styles["cookie-para"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      </p>
      <div className={styles["button-wrapper"]}>
        <button className={styles["accept"] + styles["cookie-button"]}>
          Accept
        </button>
        <button className={styles["reject"] + styles["cookie-button"]}>
          Reject
        </button>
      </div>
      <button className={styles["exit-button"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 162 162"
          className={styles["svgIconCross"]}
        >
          <path
            strokeLinecap="round"
            strokeWidth="17"
            stroke="black"
            d="M9.01074 8.98926L153.021 153"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="17"
            stroke="black"
            d="M9.01074 153L153.021 8.98926"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Card_truth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_truth = () => (
         <div>
          <div className="cookies-card">
  <p className="cookie-heading">Cookie Policy</p>
  <p className="cookie-para">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
  </p>
  <div className="button-wrapper">
    <button className="accept cookie-button">Accept</button>
    <button className="reject cookie-button">Reject</button>
  </div>
  <button className="exit-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 162 162"
      className="svgIconCross"
    >
      <path
        strokeLinecap="round"
        strokeWidth="17"
        stroke="black"
        d="M9.01074 8.98926L153.021 153"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="17"
        stroke="black"
        d="M9.01074 153L153.021 8.98926"
      ></path>
    </svg>
  </button>
</div>
        </div>
        );

        export default Card_truth;
        
        
         */
}
