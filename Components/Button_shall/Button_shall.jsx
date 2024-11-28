import React from "react";
import styles from "./Button_shall.module.css";

const Button_shall = () => (
  <div>
    <div className={styles["box"]}>
      <button className={styles["button"]}>RAIN</button>
      <div className={styles["rain"]}>
        <span style="--i: 15" className={styles["raindrop"]}></span>
        <span style="--i: 8" className={styles["raindrop"]}></span>
        <span style="--i: 19" className={styles["raindrop"]}></span>
        <span style="--i: 9" className={styles["raindrop"]}></span>
        <span style="--i: 12" className={styles["raindrop"]}></span>
        <span style="--i: 14" className={styles["raindrop"]}></span>
        <span style="--i: 11" className={styles["raindrop"]}></span>
        <span style="--i: 18" className={styles["raindrop"]}></span>
        <span style="--i: 16" className={styles["raindrop"]}></span>
        <span style="--i: 9" className={styles["raindrop"]}></span>
        <span style="--i: 19" className={styles["raindrop"]}></span>
        <span style="--i: 17" className={styles["raindrop"]}></span>
        <span style="--i: 9" className={styles["raindrop"]}></span>
        <span style="--i: 20" className={styles["raindrop"]}></span>
      </div>
    </div>
  </div>
);

export default Button_shall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_shall = () => (
         <div>
          <div className="box">
  <button className="button">RAIN</button>
  <div className="rain">
    <span style="--i: 15" className="raindrop"></span>
    <span style="--i: 8" className="raindrop"></span>
    <span style="--i: 19" className="raindrop"></span>
    <span style="--i: 9" className="raindrop"></span>
    <span style="--i: 12" className="raindrop"></span>
    <span style="--i: 14" className="raindrop"></span>
    <span style="--i: 11" className="raindrop"></span>
    <span style="--i: 18" className="raindrop"></span>
    <span style="--i: 16" className="raindrop"></span>
    <span style="--i: 9" className="raindrop"></span>
    <span style="--i: 19" className="raindrop"></span>
    <span style="--i: 17" className="raindrop"></span>
    <span style="--i: 9" className="raindrop"></span>
    <span style="--i: 20" className="raindrop"></span>
  </div>
</div>
        </div>
        );

        export default Button_shall;
        
        
         */
}
