import React from "react";
import styles from "./Button_long.module.css";

const Button_long = () => (
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

export default Button_long;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_long = () => (
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

        export default Button_long;
        
        
         */
}
