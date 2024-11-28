import React from "react";
import styles from "./Loader_die.module.css";

const Loader_die = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["cube"]}>
        <div className={styles["side"] + styles["front"]}></div>
        <div className={styles["side"] + styles["back"]}></div>
        <div className={styles["side"] + styles["top"]}></div>
        <div className={styles["side"] + styles["bottom"]}></div>
        <div className={styles["side"] + styles["left"]}></div>
        <div className={styles["side"] + styles["right"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_die;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_die = () => (
         <div>
          <div className="wrapper">
  <div className="cube">
    <div className="side front"></div>
    <div className="side back"></div>
    <div className="side top"></div>
    <div className="side bottom"></div>
    <div className="side left"></div>
    <div className="side right"></div>
  </div>
</div>
        </div>
        );

        export default Loader_die;
        
        
         */
}
