import React from "react";
import styles from "./Input_open.module.css";

const Input_open = () => (
  <div>
    <div className={styles["ui-input-container"]}>
      <input
        required=""
        placeholder="Type something..."
        className={styles["ui-input"]}
        type="text"
      />
      <div className={styles["ui-input-underline"]}></div>
      <div className={styles["ui-input-highlight"]}></div>
      <div className={styles["ui-input-icon"]}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Input_open;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_open = () => (
         <div>
          <div className="ui-input-container">
  <input
    required=""
    placeholder="Type something..."
    className="ui-input"
    type="text"
  />
  <div className="ui-input-underline"></div>
  <div className="ui-input-highlight"></div>
  <div className="ui-input-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      ></path>
    </svg>
  </div>
</div>
        </div>
        );

        export default Input_open;
        
        
         */
}
