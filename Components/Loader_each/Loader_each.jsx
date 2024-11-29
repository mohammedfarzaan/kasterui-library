import React from "react";
import styles from "./Loader_each.module.css";

const Loader_each = () => (
  <div>
    <div className={styles["loader"]}>
      <svg width="200" height="200">
        <circle
          className={styles["traco"]}
          cx="100"
          cy="100"
          r="70"
          fill="transparent"
          stroke="#ffe71c"
          strokeWidth="9"
          stroke-dasharray="35 20"
          transform="rotate(31 100 100)"
        ></circle>
      </svg>
      <div className={styles["p1"]}></div>
      <div className={styles["p2"]}></div>
      <div className={styles["p3"]}></div>
      <div className={styles["p4"]}></div>
      <div className={styles["p5"]}></div>
      <div className={styles["p6"]}></div>
      <div className={styles["p7"]}></div>
      <div className={styles["p8"]}></div>
      <div className={styles["circle"]}>
        <div className={styles["content"]}>
          <div className={styles["eyes"]}>
            <div className={styles["eye-left"]}></div>
            <div className={styles["eye-right"]}></div>
          </div>
          <div className={styles["nouse"]}></div>
          <div className={styles["mouth"]}></div>
          <div className={styles["teeth"]}>
            <div className={styles["tooth"]}></div>
            <div className={styles["tooth"]}></div>
            <div className={styles["tooth"]}></div>
            <div className={styles["tooth"]}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_each;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_each = () => (
         <div>
          <div className="loader">
  <svg width="200" height="200">
    <circle
      className="traco"
      cx="100"
      cy="100"
      r="70"
      fill="transparent"
      stroke="#ffe71c"
      strokeWidth="9"
      stroke-dasharray="35 20"
      transform="rotate(31 100 100)"
    ></circle>
  </svg>
  <div className="p1"></div>
  <div className="p2"></div>
  <div className="p3"></div>
  <div className="p4"></div>
  <div className="p5"></div>
  <div className="p6"></div>
  <div className="p7"></div>
  <div className="p8"></div>
  <div className="circle">
    <div className="content">
      <div className="eyes">
        <div className="eye-left"></div>
        <div className="eye-right"></div>
      </div>
      <div className="nouse"></div>
      <div className="mouth"></div>
      <div className="teeth">
        <div className="tooth"></div>
        <div className="tooth"></div>
        <div className="tooth"></div>
        <div className="tooth"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_each;
        
        
         */
}
