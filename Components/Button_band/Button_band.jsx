import React from "react";
import styles from "./Button_band.module.css";

const Button_band = () => (
  <div>
    <button className={styles["border-el-btn"]}>
      Button
      <span className={styles["b1"]}></span>
      <span className={styles["b2"]}></span>
      <span className={styles["b3"]}></span>
      <span className={styles["b4"]}></span>
    </button>
  </div>
);

export default Button_band;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_band = () => (
         <div>
          <button className="border-el-btn">
  Button
  <span className="b1"></span>
  <span className="b2"></span>
  <span className="b3"></span>
  <span className="b4"></span>
</button>
        </div>
        );

        export default Button_band;
        
        
         */
}
