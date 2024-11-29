import React from "react";
import styles from "./Loader_yellow.module.css";

const Loader_yellow = () => (
  <div>
    <div className={styles["orbital"]}>
      <div className={styles["ringOne"]}></div>
      <div className={styles["ringTwo"]}></div>
      <div className={styles["ringThree"]}></div>
      <div className={styles["core"]}></div>
      <div className={styles["spin"]}></div>
    </div>
  </div>
);

export default Loader_yellow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_yellow = () => (
         <div>
          <div className="orbital">
  <div className="ringOne"></div>
  <div className="ringTwo"></div>
  <div className="ringThree"></div>
  <div className="core"></div>
  <div className="spin"></div>
</div>
        </div>
        );

        export default Loader_yellow;
        
        
         */
}
