import React from "react";
import styles from "./Button_poet.module.css";

const Button_poet = () => (
  <div>
    <button className={styles["btn-53"]}>
      <div className={styles["original"]}>Button</div>
      <div className={styles["letters"]}>
        <span>B</span>
        <span>U</span>
        <span>T</span>
        <span>T</span>
        <span>O</span>
        <span>N</span>
      </div>
    </button>
  </div>
);

export default Button_poet;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_poet = () => (
         <div>
          <button className="btn-53">
  <div className="original">Button</div>
  <div className="letters">
    
    <span>B</span>
    <span>U</span>
    <span>T</span>
    <span>T</span>
    <span>O</span>
    <span>N</span>
  </div>
</button>
        </div>
        );

        export default Button_poet;
        
        
         */
}
