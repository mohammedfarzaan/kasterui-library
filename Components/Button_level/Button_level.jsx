import React from "react";
import styles from "./Button_level.module.css";

const Button_level = () => (
  <div>
    <button className={styles["BugButton"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 43 42"
        className="bugsvg"
      >
        <path
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M20 7H23C26.866 7 30 10.134 30 14V28.5C30 33.1944 26.1944 37 21.5 37C16.8056 37 13 33.1944 13 28.5V14C13 10.134 16.134 7 20 7Z"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M18 2V7"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M25 2V7"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M31 22H41"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M2 22H12"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M12.5785 15.2681C3.5016 15.2684 4.99951 12.0004 5 4"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M12.3834 29.3877C3.20782 29.3874 4.72202 32.4736 4.72252 40.0291"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M30.0003 14.8974C39.0545 15.553 37.7958 12.1852 38.3718 4.20521"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="#cfcfcf"
          d="M29.9944 29.7379C39.147 29.1188 37.8746 32.2993 38.4568 39.8355"
        ></path>
      </svg>

      <span className={styles["tooltip"]}>Bug Report</span>
    </button>
  </div>
);

export default Button_level;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_level = () => (
         <div>
          <button className="BugButton">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 43 42"
    className="bugsvg"
  >
    <path
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M20 7H23C26.866 7 30 10.134 30 14V28.5C30 33.1944 26.1944 37 21.5 37C16.8056 37 13 33.1944 13 28.5V14C13 10.134 16.134 7 20 7Z"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M18 2V7"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M25 2V7"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M31 22H41"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M2 22H12"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M12.5785 15.2681C3.5016 15.2684 4.99951 12.0004 5 4"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M12.3834 29.3877C3.20782 29.3874 4.72202 32.4736 4.72252 40.0291"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M30.0003 14.8974C39.0545 15.553 37.7958 12.1852 38.3718 4.20521"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="4"
      stroke="#cfcfcf"
      d="M29.9944 29.7379C39.147 29.1188 37.8746 32.2993 38.4568 39.8355"
    ></path>
  </svg>

  <span className="tooltip">Bug Report</span>
</button>
        </div>
        );

        export default Button_level;
        
        
         */
}
