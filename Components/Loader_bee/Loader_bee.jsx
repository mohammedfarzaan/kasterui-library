import React from "react";
import styles from "./Loader_bee.module.css";

const Loader_bee = () => (
  <div>
    <div className={styles["con"]}>
      <div className={styles["side"] + styles["left"]}></div>
      <div className={styles["side"] + styles["right"]}></div>
      <div className={styles["side"] + styles["rightAbove"]}></div>
      <div className={styles["side"] + styles["bottom"]}></div>
    </div>
  </div>
);

export default Loader_bee;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bee = () => (
         <div>
          <div className="con">
  <div className="side left"></div>
  <div className="side right"></div>
  <div className="side rightAbove"></div>
  <div className="side bottom"></div>
</div>
        </div>
        );

        export default Loader_bee;
        
        
         */
}
