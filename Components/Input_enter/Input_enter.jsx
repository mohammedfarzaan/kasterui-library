import React from "react";
import styles from "./Input_enter.module.css";

const Input_enter = () => (
  <div>
    <div className={styles["custom-search-container"]}>
      <div className={styles["custom-search-bar"]}>
        <div className={styles["custom-icon"]}>
          <svg
            className={styles["feather"] + styles["feather-search"]}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle r="8" cy="11" cx="11"></circle>
            <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
          </svg>
        </div>
        <input
          placeholder="Search..."
          className={styles["custom-search-input"]}
          type="text"
        />
        <div className={styles["custom-icon"]}>
          <svg
            className={styles["feather"] + styles["feather-filter"]}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="22 3 2 3 10 13 10 19 14 21 14 13 22 3"></polygon>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Input_enter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_enter = () => (
         <div>
          <div className="custom-search-container">
  <div className="custom-search-bar">
    <div className="custom-icon">
      <svg
        className="feather feather-search"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="8" cy="11" cx="11"></circle>
        <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
      </svg>
    </div>
    <input placeholder="Search..." className="custom-search-input" type="text" />
    <div className="custom-icon">
      <svg
        className="feather feather-filter"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="22 3 2 3 10 13 10 19 14 21 14 13 22 3"></polygon>
      </svg>
    </div>
  </div>
</div>
        </div>
        );

        export default Input_enter;
        
        
         */
}
