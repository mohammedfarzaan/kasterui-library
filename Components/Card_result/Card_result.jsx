import React from "react";
import styles from "./Card_result.module.css";

const Card_result = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["rectangle"] + styles["left-top"]}></div>
      <div className={styles["rectangle"] + styles["right-top"]}></div>
      <div className={styles["rectangle"] + styles["left-bottom"]}></div>
      <div className={styles["rectangle"] + styles["right-bottom"]}></div>
      <div className={styles["image"]}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["svg"]}
        >
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
      </div>
      <div className={styles["love"]}>
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["svg"]}
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
        </svg>
        <span>2322</span>
      </div>
      <div className={styles["category"]}>
        <button className={styles["button"]}>Abstract</button>
        <button className={styles["button"]}>Nature</button>
        <button className={styles["button"]}>Simple</button>
      </div>
      <button className={styles["action"]}>Action</button>
    </div>
  </div>
);

export default Card_result;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_result = () => (
         <div>
          <div className="card">
  <div className="rectangle left-top"></div>
  <div className="rectangle right-top"></div>
  <div className="rectangle left-bottom"></div>
  <div className="rectangle right-bottom"></div>
  <div className="image">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
      <path
        d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
      ></path>
    </svg>
  </div>
  <div className="love">
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
      <path
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      ></path>
    </svg>
    <span>2322</span>
  </div>
  <div className="category">
    <button className="button">Abstract</button>
    <button className="button">Nature</button>
    <button className="button">Simple</button>
  </div>
  <button className="action">Action</button>
</div>
        </div>
        );

        export default Card_result;
        
        
         */
}
