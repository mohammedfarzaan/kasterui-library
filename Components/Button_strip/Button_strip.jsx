import React from "react";
import styles from "./Button_strip.module.css";

const Button_strip = () => (
  <div>
    <div className={styles["box"]}>
      <button className={styles["button"]}>SPACE</button>
      <div className={styles["space"]}>
        <span style="--i: 31" className={styles["star"]}></span>
        <span style="--i: 12" className={styles["star"]}></span>
        <span style="--i: 57" className={styles["star"]}></span>
        <span style="--i: 93" className={styles["star"]}></span>
        <span style="--i: 23" className={styles["star"]}></span>
        <span style="--i: 70" className={styles["star"]}></span>
        <span style="--i: 6" className={styles["star"]}></span>
      </div>
    </div>
  </div>
);

export default Button_strip;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_strip = () => (
         <div>
          <div className="box">
  <button className="button">SPACE</button>
  <div className="space">
    <span style="--i: 31" className="star"></span>
    <span style="--i: 12" className="star"></span>
    <span style="--i: 57" className="star"></span>
    <span style="--i: 93" className="star"></span>
    <span style="--i: 23" className="star"></span>
    <span style="--i: 70" className="star"></span>
    <span style="--i: 6" className="star"></span>
  </div>
</div>
        </div>
        );

        export default Button_strip;
        
        
         */
}
