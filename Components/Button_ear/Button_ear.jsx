import React from "react";
import styles from "./Button_ear.module.css";

const Button_ear = () => (
  <div>
    <div className={styles["scene"]}>
      <div className={styles["cube"]}>
        <span className={styles["side"] + styles["top"]}>Easter</span>
        <span className={styles["side"] + styles["front"]}>Happy</span>
      </div>
    </div>
  </div>
);

export default Button_ear;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_ear = () => (
         <div>
          <div className="scene">
  <div className="cube">
    <span className="side top">Easter</span>
    <span className="side front">Happy</span>
  </div>
</div>
        </div>
        );

        export default Button_ear;
        
        
         */
}
