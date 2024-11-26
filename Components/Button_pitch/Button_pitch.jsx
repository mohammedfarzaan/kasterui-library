import React from "react";
import styles from "./Button_pitch.module.css";

const Button_pitch = () => (
  <div>
    <button className={styles["uiverse"]}>
      <div className={styles["wrapper"]}>
        <span>UIVERSE</span>
        <div className={styles["circle"] + styles["circle-12"]}></div>
        <div className={styles["circle"] + styles["circle-11"]}></div>
        <div className={styles["circle"] + styles["circle-10"]}></div>
        <div className={styles["circle"] + styles["circle-9"]}></div>
        <div className={styles["circle"] + styles["circle-8"]}></div>
        <div className={styles["circle"] + styles["circle-7"]}></div>
        <div className={styles["circle"] + styles["circle-6"]}></div>
        <div className={styles["circle"] + styles["circle-5"]}></div>
        <div className={styles["circle"] + styles["circle-4"]}></div>
        <div className={styles["circle"] + styles["circle-3"]}></div>
        <div className={styles["circle"] + styles["circle-2"]}></div>
        <div className={styles["circle"] + styles["circle-1"]}></div>
      </div>
    </button>
  </div>
);

export default Button_pitch;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pitch = () => (
         <div>
          <button className="uiverse">
    <div className="wrapper">
        <span>UIVERSE</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
    </div>
</button>
        </div>
        );

        export default Button_pitch;
        
        
         */
}
