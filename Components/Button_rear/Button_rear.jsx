import React from "react";
import styles from "./Button_rear.module.css";

const Button_rear = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["lid"]}>
        <span className={styles["side"] + styles["top"]}></span>
        <span className={styles["side"] + styles["front"]}></span>
        <span className={styles["side"] + styles["back"]}> </span>
        <span className={styles["side"] + styles["left"]}></span>
        <span className={styles["side"] + styles["right"]}></span>
      </div>
      <div className={styles["panels"]}>
        <div className={styles["panel-1"]}>
          <div className={styles["panel-2"]}>
            <div className={styles["btn-trigger"]}>
              <span className={styles["btn-trigger-1"]}></span>
              <span className={styles["btn-trigger-2"]}></span>
            </div>
          </div>
        </div>
      </div>
    </button>
  </div>
);

export default Button_rear;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_rear = () => (
         <div>
          <button className="button">
  <div className="lid">
    <span className="side top"></span>
    <span className="side front"></span>
    <span className="side back"> </span>
    <span className="side left"></span>
    <span className="side right"></span>
  </div>
  <div className="panels">
    <div className="panel-1">
      <div className="panel-2">
        <div className="btn-trigger">
          <span className="btn-trigger-1"></span>
          <span className="btn-trigger-2"></span>
        </div>
      </div>
    </div>
  </div>
</button>
        </div>
        );

        export default Button_rear;
        
        
         */
}
