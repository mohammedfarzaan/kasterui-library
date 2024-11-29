import React from "react";
import styles from "./Loader_those.module.css";

const Loader_those = () => (
  <div>
    <div className={styles["spinner-container"]}>
      <div className={styles["spinner-inner"]}>
        <div className={styles["spinner-outer"]}>
          <div className={styles["spinner-inner-1"]}></div>
          <div className={styles["spinner-inner-2"]}></div>
          <div className={styles["spinner-inner-3"]}></div>
          <div className={styles["spinner-inner-4"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_those;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_those = () => (
         <div>
          <div className="spinner-container">
  <div className="spinner-inner">
    <div className="spinner-outer">
      <div className="spinner-inner-1"></div>
      <div className="spinner-inner-2"></div>
      <div className="spinner-inner-3"></div>
      <div className="spinner-inner-4"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_those;
        
        
         */
}
