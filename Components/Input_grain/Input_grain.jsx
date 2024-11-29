import React from "react";
import styles from "./Input_grain.module.css";

const Input_grain = () => (
  <div>
    <div id="container" className={styles["custom-container"]}>
      <div
        id="searchBar"
        className={styles["custom-search-bar"] + styles["dark-mode"]}
      >
        <svg
          height="24"
          width="24"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["custom-search-icon"] + styles["dark-mode"]}
        >
          <path
            d="M11 19a8 8 0 100-16 8 8 0 000 16zm8-8l5 5"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        <input
          placeholder="Search..."
          className={styles["custom-search-input"] + styles["dark-mode"]}
          type="text"
        />
        <svg
          height="24"
          width="24"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["custom-filter-icon"] + styles["dark-mode"]}
        >
          <path
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A2 2 0 0013 14.828V17.586a1 1 0 01-.293.707l-2 2A1 1 0 019 19.586V14.828a2 2 0 00-.293-1.414L2.293 6.707A1 1 0 012 6V4z"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Input_grain;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_grain = () => (
         <div>
          <div id="container" className="custom-container">
  <div id="searchBar" className="custom-search-bar dark-mode">
    <svg
      height="24"
      width="24"
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="custom-search-icon dark-mode"
    >
      <path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zm8-8l5 5"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
    </svg>
    <input
      placeholder="Search..."
      className="custom-search-input dark-mode"
      type="text"
    />
    <svg
      height="24"
      width="24"
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="custom-filter-icon dark-mode"
    >
      <path
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A2 2 0 0013 14.828V17.586a1 1 0 01-.293.707l-2 2A1 1 0 019 19.586V14.828a2 2 0 00-.293-1.414L2.293 6.707A1 1 0 012 6V4z"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      ></path>
    </svg>
  </div>
</div>
        </div>
        );

        export default Input_grain;
        
        
         */
}
