import React from "react";
import styles from "./Button_fly.module.css";

const Button_fly = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["button"]}>
        <div className={styles["button__line"]}></div>
        <div className={styles["button__line"]}></div>
        <span className={styles["button__text"]}>Hover Me</span>
        <div className={styles["button__drow1"]}></div>
        <div className={styles["button__drow2"]}></div>
      </button>
    </div>
  </div>
);

export default Button_fly;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_fly = () => (
         <div>
          <div className="container">
  <button className="button">
    <div className="button__line"></div>
    <div className="button__line"></div>
    <span className="button__text">Hover Me</span>
    <div className="button__drow1"></div>
    <div className="button__drow2"></div>
  </button>  
</div>
        </div>
        );

        export default Button_fly;
        
        
         */
}
