import React from "react";
import styles from "./Button_giving.module.css";

const Button_giving = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["button"]}>
        <div className={styles["plate"]}></div>
        <div className={styles["plate"]}></div>
        <div className={styles["plate"]}></div>
        <div className={styles["plate"]}></div>
        <div className={styles["plate"]}></div>
        <div className={styles["button__wrapper"]}>
          <span className={styles["button__text"]}>Battery</span>
        </div>
        <div className={styles["button__box"]}>
          <div className={styles["inner"] + styles["inner__top"]}></div>
          <div className={styles["inner"] + styles["inner__front"]}></div>
          <div className={styles["inner"] + styles["inner__bottom"]}></div>
          <div className={styles["inner"] + styles["inner__back"]}></div>
          <div className={styles["inner"] + styles["inner__left"]}></div>
          <div className={styles["inner"] + styles["inner__right"]}></div>
        </div>
      </button>
    </div>
  </div>
);

export default Button_giving;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_giving = () => (
         <div>
          <div className="container">
  <button className="button">
    <div className="plate"></div>
    <div className="plate"></div>
    <div className="plate"></div>
    <div className="plate"></div>
    <div className="plate"></div>
    <div className="button__wrapper">
      <span className="button__text">Battery</span>
    </div>
    <div className="button__box">
      <div className="inner inner__top"></div>
      <div className="inner inner__front"></div>
      <div className="inner inner__bottom"></div>
      <div className="inner inner__back"></div>
      <div className="inner inner__left"></div>
      <div className="inner inner__right"></div>
    </div>
  </button>
</div>
        </div>
        );

        export default Button_giving;
        
        
         */
}
