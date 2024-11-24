import React from "react";
import styles from "./Button_draw.module.css";

const Button_draw = () => (
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

export default Button_draw;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_draw = () => (
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

        export default Button_draw;
        
        
         */
}
