import React from "react";
import styles from "./Radio_herd.module.css";

const Radio_herd = () => (
  <div>
    <div role="radiogroup" className={styles["theme-switcher"]}>
      <button
        type="button"
        role="radio"
        data-theme-switcher="true"
        data-active="false"
        className={styles["theme-switcher_switch"]}
        aria-label="Switch to light theme"
        aria-checked="false"
      >
        <svg
          style={{ color: "currentcolor", width: "16px", height: "16px" }}
          width="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          shape-rendering="geometricPrecision"
          height="24"
          fill="none"
          data-testid="geist-icon"
          className={styles["icon"]}
        >
          <circle r="5" cy="12" cx="12"></circle>
          <path d="M12 1v2"></path>
          <path d="M12 21v2"></path>
          <path d="M4.22 4.22l1.42 1.42"></path>
          <path d="M18.36 18.36l1.42 1.42"></path>
          <path d="M1 12h2"></path>
          <path d="M21 12h2"></path>
          <path d="M4.22 19.78l1.42-1.42"></path>
          <path d="M18.36 5.64l1.42-1.42"></path>
        </svg>
      </button>
      <button
        type="button"
        role="radio"
        data-theme-switcher="true"
        data-active="false"
        className={styles["theme-switcher_switch"]}
        aria-label="Switch to system theme"
        aria-checked="false"
      >
        <svg
          style={{ color: "currentcolor", width: "16px", height: "16px" }}
          width="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          shape-rendering="geometricPrecision"
          height="24"
          fill="none"
          data-testid="geist-icon"
          className={styles["icon"]}
        >
          <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
          <path d="M8 21h8"></path>
          <path d="M12 17v4"></path>
        </svg>
      </button>
      <button
        type="button"
        role="radio"
        data-theme-switcher="true"
        data-active="true"
        className={styles["theme-switcher_switch"]}
        aria-label="Switch to dark theme"
        aria-checked="true"
      >
        <svg
          style={{ color: "currentcolor", width: "16px", height: "16px" }}
          width="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          shape-rendering="geometricPrecision"
          height="24"
          fill="none"
          data-testid="geist-icon"
          className={styles["icon"]}
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Radio_herd;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_herd = () => (
         <div>
          <div role="radiogroup" className="theme-switcher">
  <button
    type="button"
    role="radio"
    data-theme-switcher="true"
    data-active="false"
    className="theme-switcher_switch"
    aria-label="Switch to light theme"
    aria-checked="false"
  >
    <svg
      style={{color:"currentcolor",width:"16px",height:"16px"}}
      width="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="currentColor"
      shape-rendering="geometricPrecision"
      height="24"
      fill="none"
      data-testid="geist-icon"
      className="icon"
    >
      <circle r="5" cy="12" cx="12"></circle>
      <path d="M12 1v2"></path>
      <path d="M12 21v2"></path>
      <path d="M4.22 4.22l1.42 1.42"></path>
      <path d="M18.36 18.36l1.42 1.42"></path>
      <path d="M1 12h2"></path>
      <path d="M21 12h2"></path>
      <path d="M4.22 19.78l1.42-1.42"></path>
      <path d="M18.36 5.64l1.42-1.42"></path>
    </svg>
  </button>
  <button
    type="button"
    role="radio"
    data-theme-switcher="true"
    data-active="false"
    className="theme-switcher_switch"
    aria-label="Switch to system theme"
    aria-checked="false"
  >
    <svg
      style={{color:"currentcolor",width:"16px",height:"16px"}}
      width="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="currentColor"
      shape-rendering="geometricPrecision"
      height="24"
      fill="none"
      data-testid="geist-icon"
      className="icon"
    >
      <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
    </svg>
  </button>
  <button
    type="button"
    role="radio"
    data-theme-switcher="true"
    data-active="true"
    className="theme-switcher_switch"
    aria-label="Switch to dark theme"
    aria-checked="true"
  >
    <svg
      style={{color:"currentcolor",width:"16px",height:"16px"}}
      width="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="currentColor"
      shape-rendering="geometricPrecision"
      height="24"
      fill="none"
      data-testid="geist-icon"
      className="icon"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
    </svg>
  </button>
</div>
        </div>
        );

        export default Radio_herd;
        
        
         */
}
