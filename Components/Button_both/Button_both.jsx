import React from "react";
import styles from "./Button_both.module.css";

const Button_both = () => (
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

export default Button_both;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_both = () => (
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

        export default Button_both;
        
        
         */
}
