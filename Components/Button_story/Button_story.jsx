import React from "react";
import styles from "./Button_story.module.css";

const Button_story = () => (
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

export default Button_story;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_story = () => (
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

        export default Button_story;
        
        
         */
}
