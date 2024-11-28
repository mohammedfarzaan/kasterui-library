import React from "react";
import styles from "./Button_poetry.module.css";

const Button_poetry = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["btn"]}>
        <div className={styles["sides"] + styles["top"]}>BUTTON</div>
        <div className={styles["sides"] + styles["front"]}></div>
      </div>
    </div>
  </div>
);

export default Button_poetry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_poetry = () => (
         <div>
          <div className="container">
  <div className="btn">
    <div className="sides top">
      BUTTON
    </div>
    <div className="sides front"></div>
  </div>
</div>
        </div>
        );

        export default Button_poetry;
        
        
         */
}
