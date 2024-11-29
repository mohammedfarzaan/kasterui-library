import React from "react";
import styles from "./Button_teeth.module.css";

const Button_teeth = () => (
  <div>
    <div className={styles["button"]}>
      <a href="#">Download</a>
      <b className={styles["top"]}>click to download</b>
      <b className={styles["bottom"]}>1.2MB .zip</b>
    </div>
  </div>
);

export default Button_teeth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_teeth = () => (
         <div>
          <div className="button">
  <a href="#">Download</a>
  <b className="top">click to download</b>
  <b className="bottom">1.2MB .zip</b>
</div>
        </div>
        );

        export default Button_teeth;
        
        
         */
}
