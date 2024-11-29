import React from "react";
import styles from "./Button_till.module.css";

const Button_till = () => (
  <div>
    <div className={styles["box"]}>
      <button className={styles["button"]}>FALL</button>
      <div className={styles["falling-leaves"]}>
        <span className={styles["leaf"]} style="--i: 13; --hue:20"></span>
        <span className={styles["leaf"]} style="--i: 16; --hue:10"></span>
        <span className={styles["leaf"]} style="--i: 17; --hue:0"></span>
        <span className={styles["leaf"]} style="--i: 21; --hue:10"></span>
        <span className={styles["leaf"]} style="--i: 13; --hue:90"></span>
        <span className={styles["leaf"]} style="--i: 11; --hue:70"></span>
        <span className={styles["leaf"]} style="--i: 14; --hue:40"></span>
        <span className={styles["leaf"]} style="--i: 17; --hue:60"></span>
        <span className={styles["leaf"]} style="--i: 19; --hue:0"></span>
        <span className={styles["leaf"]} style="--i: 26; --hue:90"></span>
        <span className={styles["leaf"]} style="--i: 17; --hue:60"></span>
        <span className={styles["leaf"]} style="--i: 20; --hue:10"></span>
      </div>
    </div>
  </div>
);

export default Button_till;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_till = () => (
         <div>
          <div className="box">
  <button className="button">FALL</button>
  <div className="falling-leaves">
    <span className="leaf" style="--i: 13; --hue:20"></span>
    <span className="leaf" style="--i: 16; --hue:10"></span>
    <span className="leaf" style="--i: 17; --hue:0"></span>
    <span className="leaf" style="--i: 21; --hue:10"></span>
    <span className="leaf" style="--i: 13; --hue:90"></span>
    <span className="leaf" style="--i: 11; --hue:70"></span>
    <span className="leaf" style="--i: 14; --hue:40"></span>
    <span className="leaf" style="--i: 17; --hue:60"></span>
    <span className="leaf" style="--i: 19; --hue:0"></span>
    <span className="leaf" style="--i: 26; --hue:90"></span>
    <span className="leaf" style="--i: 17; --hue:60"></span>
    <span className="leaf" style="--i: 20; --hue:10"></span>
  </div>
</div>
        </div>
        );

        export default Button_till;
        
        
         */
}
