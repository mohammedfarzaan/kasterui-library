import React from "react";
import styles from "./Button_may.module.css";

const Button_may = () => (
  <div>
    <div className={styles["box"]}>
      <button className={styles["button"]}>LISTEN</button>
      <div className={styles["music"]}>
        <span className={styles["soundwave"]} style="--i: 12"></span>
        <span className={styles["soundwave"]} style="--i: 31"></span>
        <span className={styles["soundwave"]} style="--i: 25"></span>
        <span className={styles["soundwave"]} style="--i: 18"></span>
        <span className={styles["soundwave"]} style="--i: 11"></span>
        <span className={styles["soundwave"]} style="--i: 23"></span>
        <span className={styles["soundwave"]} style="--i: 16"></span>
        <span className={styles["soundwave"]} style="--i: 34"></span>
        <span className={styles["soundwave"]} style="--i: 19"></span>
        <span className={styles["soundwave"]} style="--i: 14"></span>
      </div>
    </div>
  </div>
);

export default Button_may;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_may = () => (
         <div>
          <div className="box">
  <button className="button">LISTEN</button>
  <div className="music">
    <span className="soundwave" style="--i: 12"></span>
    <span className="soundwave" style="--i: 31"></span>
    <span className="soundwave" style="--i: 25"></span>
    <span className="soundwave" style="--i: 18"></span>
    <span className="soundwave" style="--i: 11"></span>
    <span className="soundwave" style="--i: 23"></span>
    <span className="soundwave" style="--i: 16"></span>
    <span className="soundwave" style="--i: 34"></span>
    <span className="soundwave" style="--i: 19"></span>
    <span className="soundwave" style="--i: 14"></span>
  </div>
</div>
        </div>
        );

        export default Button_may;
        
        
         */
}
