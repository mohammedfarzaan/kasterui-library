import React from "react";
import styles from "./Button_brief.module.css";

const Button_brief = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["icon"]}>
        <span className={styles["text-icon"] + styles["hide"]}>Icon</span>
        <svg
          className={styles["css-i6dzq1"]}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          height="24"
          width="24"
          viewBox="0 0 24 24"
        >
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      </div>
      <span className={styles["title"]}> Anatomy </span>
      <div className={styles["padding-left"] + styles["hide"]}>
        <div className={styles["padding-left-line"]}>
          <span className={styles["padding-left-text"]}>Left Padding</span>
        </div>
      </div>
      <div className={styles["padding-right"] + styles["hide"]}>
        <div className={styles["padding-right-line"]}>
          <span className={styles["padding-right-text"]}>Right Padding</span>
        </div>
      </div>
      <div className={styles["background"] + styles["hide"]}>
        <span className={styles["background-text"]}>Background</span>
      </div>
      <div className={styles["border"] + styles["hide"]}>
        <span className={styles["border-text"]}>Border Radius</span>
      </div>
    </button>
  </div>
);

export default Button_brief;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_brief = () => (
         <div>
          <button className="button">
  <div className="icon">
    <span className="text-icon hide">Icon</span>
    <svg
      className="css-i6dzq1"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      height="24"
      width="24"
      viewBox="0 0 24 24"
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  </div>
  <span className="title"> Anatomy </span>
  <div className="padding-left hide">
    <div className="padding-left-line">
      <span className="padding-left-text">Left Padding</span>
    </div>
  </div>
  <div className="padding-right hide">
    <div className="padding-right-line">
      <span className="padding-right-text">Right Padding</span>
    </div>
  </div>
  <div className="background hide">
    <span className="background-text">Background</span>
  </div>
  <div className="border hide">
    <span className="border-text">Border Radius</span>
  </div>
</button>
        </div>
        );

        export default Button_brief;
        
        
         */
}
