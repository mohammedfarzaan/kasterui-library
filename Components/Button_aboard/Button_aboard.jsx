import React from "react";
import styles from "./Button_aboard.module.css";

const Button_aboard = () => (
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

export default Button_aboard;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_aboard = () => (
         <div>
          <a className="code-button code-button--html code-button--color" href="#">
  <b className="code-button__bracket">&lt;</b>
  <span className="code-button__code">/</span>
  <span className="code-button__text">html</span>
  <b className="code-button__bracket">&gt;</b>
</a>
        </div>
        );

        export default Button_aboard;
        
        
         */
}
