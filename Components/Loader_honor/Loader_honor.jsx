import React from "react";
import styles from "./Loader_honor.module.css";

const Loader_honor = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["top-left"]}></div>
      <div className={styles["top-right"]}></div>
      <div className={styles["bottom-left"]}></div>
      <div className={styles["bottom-right"]}></div>
    </div>
  </div>
);

export default Loader_honor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_honor = () => (
         <div>
          <div className="container">
    <div className="top-left"></div>
    <div className="top-right"></div>
    <div className="bottom-left"></div>
    <div className="bottom-right"></div>
</div>
        </div>
        );

        export default Loader_honor;
        
        
         */
}
