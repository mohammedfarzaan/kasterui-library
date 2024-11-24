import React from "react";
import styles from "./Button_found.module.css";

const Button_found = () => (
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

export default Button_found;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_found = () => (
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

        export default Button_found;
        
        
         */
}
