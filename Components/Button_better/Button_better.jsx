import React from "react";
import styles from "./Button_better.module.css";

const Button_better = () => (
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

export default Button_better;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_better = () => (
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

        export default Button_better;
        
        
         */
}
