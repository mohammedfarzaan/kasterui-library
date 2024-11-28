import React from "react";
import styles from "./Button_meet.module.css";

const Button_meet = () => (
  <div>
    <div className={styles["share-wrapper"]}>
      <input id="share-toggle" type="checkbox" className={styles["check"]} />
      <label for="share-toggle" className={styles["container"]}>
        <svg
          className="icon inactive"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M18 16.08C17.24 16.08 16.56 16.38 16.05 16.87L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.95 7.13C16.46 7.62 17.24 7.92 18 7.92C19.66 7.92 21 6.58 21 4.92C21 3.26 19.66 1.92 18 1.92C16.34 1.92 15 3.26 15 4.92C15 5.16 15.04 5.39 15.09 5.62L8.05 9.79C7.54 9.3 6.76 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.76 15 7.54 14.7 8.05 14.21L15.18 18.38C15.13 18.61 15.09 18.84 15.09 19.08C15.09 20.74 16.43 22.08 18.09 22.08C19.75 22.08 21.09 20.74 21.09 19.08C21.09 17.42 19.75 16.08 18 16.08Z"></path>
        </svg>
        <svg
          className="icon active"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M18 16.08C17.24 16.08 16.56 16.38 16.05 16.87L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.95 7.13C16.46 7.62 17.24 7.92 18 7.92C19.66 7.92 21 6.58 21 4.92C21 3.26 19.66 1.92 18 1.92C16.34 1.92 15 3.26 15 4.92C15 5.16 15.04 5.39 15.09 5.62L8.05 9.79C7.54 9.3 6.76 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.76 15 7.54 14.7 8.05 14.21L15.18 18.38C15.13 18.61 15.09 18.84 15.09 19.08C15.09 20.74 16.43 22.08 18.09 22.08C19.75 22.08 21.09 20.74 21.09 19.08C21.09 17.42 19.75 16.08 18 16.08Z"></path>
        </svg>
        <div className={styles["checkmark"]}></div>
        <span className={styles["share-text"]}>Share</span>
      </label>
    </div>
  </div>
);

export default Button_meet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_meet = () => (
         <div>
          <div className="share-wrapper">
  <input id="share-toggle" type="checkbox" className="check" />
  <label for="share-toggle" className="container">
    <svg
      className="icon inactive"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M18 16.08C17.24 16.08 16.56 16.38 16.05 16.87L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.95 7.13C16.46 7.62 17.24 7.92 18 7.92C19.66 7.92 21 6.58 21 4.92C21 3.26 19.66 1.92 18 1.92C16.34 1.92 15 3.26 15 4.92C15 5.16 15.04 5.39 15.09 5.62L8.05 9.79C7.54 9.3 6.76 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.76 15 7.54 14.7 8.05 14.21L15.18 18.38C15.13 18.61 15.09 18.84 15.09 19.08C15.09 20.74 16.43 22.08 18.09 22.08C19.75 22.08 21.09 20.74 21.09 19.08C21.09 17.42 19.75 16.08 18 16.08Z"
      ></path>
    </svg>
    <svg
      className="icon active"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M18 16.08C17.24 16.08 16.56 16.38 16.05 16.87L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.95 7.13C16.46 7.62 17.24 7.92 18 7.92C19.66 7.92 21 6.58 21 4.92C21 3.26 19.66 1.92 18 1.92C16.34 1.92 15 3.26 15 4.92C15 5.16 15.04 5.39 15.09 5.62L8.05 9.79C7.54 9.3 6.76 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.76 15 7.54 14.7 8.05 14.21L15.18 18.38C15.13 18.61 15.09 18.84 15.09 19.08C15.09 20.74 16.43 22.08 18.09 22.08C19.75 22.08 21.09 20.74 21.09 19.08C21.09 17.42 19.75 16.08 18 16.08Z"
      ></path>
    </svg>
    <div className="checkmark"></div>
    <span className="share-text">Share</span>
  </label>
</div>
        </div>
        );

        export default Button_meet;
        
        
         */
}
