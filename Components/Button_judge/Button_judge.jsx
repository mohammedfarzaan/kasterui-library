import React from "react";
import styles from "./Button_judge.module.css";

const Button_judge = () => (
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

export default Button_judge;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_judge = () => (
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

        export default Button_judge;
        
        
         */
}
