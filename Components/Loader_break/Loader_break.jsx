import React from "react";
import styles from "./Loader_break.module.css";

const Loader_break = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader-cube"]}>
        <div className={styles["loader-side"] + styles["front"]}></div>
        <div className={styles["loader-side"] + styles["back"]}></div>
        <div className={styles["loader-side"] + styles["left"]}></div>
        <div className={styles["loader-side"] + styles["right"]}></div>
        <div className={styles["loader-side"] + styles["top"]}></div>
        <div className={styles["loader-side"] + styles["bottom"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_break;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_break = () => (
         <div>
          <div className="loader-container">
  <div className="loader-cube">
    <div className="loader-side front"></div>
    <div className="loader-side back"></div>
    <div className="loader-side left"></div>
    <div className="loader-side right"></div>
    <div className="loader-side top"></div>
    <div className="loader-side bottom"></div>
  </div>
</div>
        </div>
        );

        export default Loader_break;
        
        
         */
}
