import React from "react";
import styles from "./Button_loss.module.css";

const Button_loss = () => (
  <div>
    <div className={styles["container"]}>
      <span className={styles["span-text"]}>
        <svg
          height="20pt"
          width="20pt"
          viewBox="0 0 20 20"
          style={{ isolation: "isolate" }}
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="_clipPath_bC9TwUVn0M3ipVC8aHmmX7RNkfzJwdgL">
              <rect height="20" width="20"></rect>
            </clipPath>
          </defs>
          <g clip-path="url(#_clipPath_bC9TwUVn0M3ipVC8aHmmX7RNkfzJwdgL)">
            <rect
              fill-opacity="0"
              style={{ fill: "rgb(1,0,1)" }}
              height="20"
              width="20"
            ></rect>
            <path
              stroke-miterlimit="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="rgb(0,0,0)"
              strokeWidth="1"
              fill="rgb(0,0,0)"
              d="M 10 1 L 10 9 L 15 9 L 10 19 L 10 12 L 5 12 L 10 1 Z"
            ></path>
          </g>
        </svg>
        Join now
      </span>
      <button className={styles["button"]}>
        <span className={styles["span-outside"]}> </span>
        <div className={styles["circles"]}>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
          <span className={styles["circle"]}> </span>
        </div>
      </button>
    </div>
  </div>
);

export default Button_loss;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_loss = () => (
         <div>
          <div className="container">
  <span className="span-text">
    <svg
      height="20pt"
      width="20pt"
      viewBox="0 0 20 20"
      style={{isolation:"isolate"}}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="_clipPath_bC9TwUVn0M3ipVC8aHmmX7RNkfzJwdgL">
          <rect height="20" width="20"></rect>
        </clipPath>
      </defs>
      <g clip-path="url(#_clipPath_bC9TwUVn0M3ipVC8aHmmX7RNkfzJwdgL)">
        <rect
          fill-opacity="0"
          style={{fill:"rgb(1,0,1)"}}
          height="20"
          width="20"
        ></rect>
        <path
          stroke-miterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="rgb(0,0,0)"
          strokeWidth="1"
          fill="rgb(0,0,0)"
          d="M 10 1 L 10 9 L 15 9 L 10 19 L 10 12 L 5 12 L 10 1 Z"
        ></path>
      </g>
    </svg>
    Join now
  </span>
  <button className="button">
    <span className="span-outside"> </span>
    <div className="circles">
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
      <span className="circle"> </span>
    </div>
  </button>
</div>
        </div>
        );

        export default Button_loss;
        
        
         */
}
