import React from "react";
import styles from "./Button_ball.module.css";

const Button_ball = () => (
  <div>
    <div className={styles["button"]}>
      <a className={styles["first"]}> Keep hovering me </a>
      <a className={styles["slidein"]}> Welcome to uiverse</a>
      <a className={styles["slidein"] + styles["two"]}> Keep going </a>
      <a className={styles["slidein"] + styles["three"]}> Create on uiverse </a>
      <a className={styles["slidein"] + styles["four"]}> Save favorite </a>
      <a className={styles["slidein"] + styles["five"]}> ...and enjoy! </a>
      <a className={styles["slidein"] + styles["six"]}> Respect us.</a>
      <a className={styles["slidein"] + styles["seven"]}> and we will you. </a>
      <a className={styles["slidein"] + styles["eight"]}> Happy coding. </a>
      <a className={styles["slidein"] + styles["nine"]}> ...and thanks. </a>
      <a className={styles["slidein"] + styles["ten"]}> uiverse.io </a>
    </div>
  </div>
);

export default Button_ball;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_ball = () => (
         <div>
          <div className="button">
    <a className="first"> Keep hovering me </a>
    <a className="slidein"> Welcome to uiverse</a>
    <a className="slidein two"> Keep going </a>
    <a className="slidein three"> Create on uiverse </a>
    <a className="slidein four"> Save favorite </a>
    <a className="slidein five"> ...and enjoy! </a>
    <a className="slidein six"> Respect us.</a>
    <a className="slidein seven"> and we will you. </a>
    <a className="slidein eight"> Happy coding. </a>
    <a className="slidein nine"> ...and thanks. </a>
    <a className="slidein ten"> uiverse.io </a>
</div>
        </div>
        );

        export default Button_ball;
        
        
         */
}
