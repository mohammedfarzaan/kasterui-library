import React from "react";
import styles from "./Button_vast.module.css";

const Button_vast = () => (
  <div>
    <div className={styles["container"]}>
      <a href="#" className={styles["button"] + styles["type--C"]}>
        <div className={styles["button__line"]}></div>
        <div className={styles["button__line"]}></div>
        <span className={styles["button__text"]}>ENTRY</span>
        <div className={styles["button__drow1"]}></div>
        <div className={styles["button__drow2"]}></div>
      </a>
    </div>
  </div>
);

export default Button_vast;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_vast = () => (
         <div>
          <div className="container">
  <a href="#" className="button type--C">
    <div className="button__line"></div>
    <div className="button__line"></div>
    <span className="button__text">ENTRY</span>
    <div className="button__drow1"></div>
    <div className="button__drow2"></div>
  </a>
</div>
        </div>
        );

        export default Button_vast;
        
        
         */
}
