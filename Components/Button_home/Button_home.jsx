import React from "react";
import styles from "./Button_home.module.css";

const Button_home = () => (
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

export default Button_home;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_home = () => (
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

        export default Button_home;
        
        
         */
}
