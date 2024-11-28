import React from "react";
import styles from "./Button_farm.module.css";

const Button_farm = () => (
  <div>
    <a
      className={
        styles["code-button"] +
        styles["code-button--html"] +
        styles["code-button--color"]
      }
      href="#"
    >
      <b className={styles["code-button__bracket"]}>&lt;</b>
      <span className={styles["code-button__code"]}>/</span>
      <span className={styles["code-button__text"]}>html</span>
      <b className={styles["code-button__bracket"]}>&gt;</b>
    </a>
  </div>
);

export default Button_farm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_farm = () => (
         <div>
          <a className="code-button code-button--html code-button--color" href="#">
  <b className="code-button__bracket">&lt;</b>
  <span className="code-button__code">/</span>
  <span className="code-button__text">html</span>
  <b className="code-button__bracket">&gt;</b>
</a>
        </div>
        );

        export default Button_farm;
        
        
         */
}
