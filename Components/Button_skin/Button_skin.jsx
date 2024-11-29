import React from "react";
import styles from "./Button_skin.module.css";

const Button_skin = () => (
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

export default Button_skin;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_skin = () => (
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

        export default Button_skin;
        
        
         */
}
