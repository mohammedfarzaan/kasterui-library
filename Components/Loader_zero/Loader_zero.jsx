import React from "react";
import styles from "./Loader_zero.module.css";

const Loader_zero = () => (
  <div>
    <div className={styles["loading-wave"]}>
      <div className={styles["loading-bar"]}></div>
      <div className={styles["loading-bar"]}></div>
      <div className={styles["loading-bar"]}></div>
      <div className={styles["loading-bar"]}></div>
    </div>
  </div>
);

export default Loader_zero;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_zero = () => (
         <div>
          <div className="loading-wave">
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
</div>
        </div>
        );

        export default Loader_zero;
        
        
         */
}
