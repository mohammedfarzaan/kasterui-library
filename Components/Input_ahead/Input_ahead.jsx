import React from "react";
import styles from "./Input_ahead.module.css";

const Input_ahead = () => (
  <div>
    <div className={styles["input-wrapper"]}>
      <input placeholder="Search..." type="text" className={styles["input"]} />
      <svg
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        className={styles["search-icon"]}
      >
        <circle r="8" cy="11" cx="11"></circle>
        <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
      </svg>
      <svg
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 1792 1792"
        height="24"
        width="24"
        className={styles["filter-icon"]}
      >
        <path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z"></path>
      </svg>
    </div>
  </div>
);

export default Input_ahead;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_ahead = () => (
         <div>
          <div className="input-wrapper">
  <input placeholder="Search..." type="text" className="input" />
  <svg
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    className="search-icon"
  >
    <circle r="8" cy="11" cx="11"></circle>
    <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
  </svg>
  <svg
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 1792 1792"
    height="24"
    width="24"
    className="filter-icon"
  >
    <path
      d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z"
    ></path>
  </svg>
</div>
        </div>
        );

        export default Input_ahead;
        
        
         */
}
