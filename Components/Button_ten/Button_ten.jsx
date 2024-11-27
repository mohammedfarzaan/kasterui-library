import React from "react";
import styles from "./Button_ten.module.css";

const Button_ten = () => (
  <div>
    <button className={styles["btn-1"]}>
      <div className={styles["original"]}>Signup</div>
      <div className={styles["letters"]}>
        <span>S</span>
        <span>I</span>
        <span>G</span>
        <span>N</span>
        <span>U</span>
        <span>P</span>
      </div>
    </button>
  </div>
);

export default Button_ten;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_ten = () => (
         <div>
          <button className="btn-1">
  <div className="original">Signup</div>
  <div className="letters">
    <span>S</span>
    <span>I</span>
    <span>G</span>
    <span>N</span>
    <span>U</span>
    <span>P</span>
  </div>
</button>
        </div>
        );

        export default Button_ten;
        
        
         */
}
