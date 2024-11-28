import React from "react";
import styles from "./Button_nice.module.css";

const Button_nice = () => (
  <div>
    <a className={styles["brutalist-button"]} href="/">
      <div className={styles["ms-logo"]}>
        <div className={styles["ms-logo-square"]}></div>
        <div className={styles["ms-logo-square"]}></div>
        <div className={styles["ms-logo-square"]}></div>
        <div className={styles["ms-logo-square"]}></div>
      </div>
      <div className={styles["button-text"]}>
        <span>Get it from</span>
        <span>Microsoft</span>
      </div>
    </a>
  </div>
);

export default Button_nice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_nice = () => (
         <div>
          <a className="brutalist-button" href="/">
  <div className="ms-logo">
    <div className="ms-logo-square"></div>
    <div className="ms-logo-square"></div>
    <div className="ms-logo-square"></div>
    <div className="ms-logo-square"></div>
  </div>
  <div className="button-text">
    <span>Get it from</span>
    <span>Microsoft</span>
  </div>
</a>
        </div>
        );

        export default Button_nice;
        
        
         */
}
