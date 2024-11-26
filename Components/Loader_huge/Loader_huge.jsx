import React from "react";
import styles from "./Loader_huge.module.css";

const Loader_huge = () => (
  <div>
    <div className={styles["loader"]}>
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

export default Loader_huge;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_huge = () => (
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

        export default Loader_huge;
        
        
         */
}
