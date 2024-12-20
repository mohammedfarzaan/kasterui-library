import React from "react";
import styles from "./Loader_tip.module.css";

const Loader_tip = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]}>
        <span></span>
      </div>
      <div className={styles["loader"]}>
        <span></span>
      </div>
      <div className={styles["loader"]}>
        <i></i>
      </div>
      <div className={styles["loader"]}>
        <i></i>
      </div>
    </div>
  </div>
);

export default Loader_tip;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_tip = () => (
         <div>
          <div className="container">
        <div className="loader"><span></span></div>
        <div className="loader"><span></span></div>
        <div className="loader"><i></i></div>
        <div className="loader"><i></i></div>
    </div>
        </div>
        );

        export default Loader_tip;
        
        
         */
}
