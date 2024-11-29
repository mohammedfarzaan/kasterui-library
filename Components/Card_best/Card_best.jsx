import React from "react";
import styles from "./Card_best.module.css";

const Card_best = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["numbers"]}>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
        <span className={styles["number"]}></span>
      </div>
      <div className={styles["needles"]}>
        <span className={styles["h"]}></span>
        <span className={styles["m"]}></span>
        <span className={styles["s"]}></span>
        <span className={styles["center"]}></span>
      </div>
      <div className={styles["pie"]}></div>
    </div>
  </div>
);

export default Card_best;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_best = () => (
         <div>
          <div className="card">
  <div className="numbers">
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
    <span className="number"></span>
  </div>
  <div className="needles">
    <span className="h"></span>
    <span className="m"></span>
    <span className="s"></span>
    <span className="center"></span>
  </div>
  <div className="pie"></div>
</div>
        </div>
        );

        export default Card_best;
        
        
         */
}
