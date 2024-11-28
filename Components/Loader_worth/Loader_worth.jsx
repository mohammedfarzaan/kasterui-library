import React from "react";
import styles from "./Loader_worth.module.css";

const Loader_worth = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["dot1"]}></div>
      <div className={styles["dot2"]}></div>
      <div className={styles["dot3"]}></div>
    </div>
  </div>
);

export default Loader_worth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_worth = () => (
         <div>
          <div className="spinner">
<div className="dot1"></div>
<div className="dot2"></div>
<div className="dot3"></div>
</div>
        </div>
        );

        export default Loader_worth;
        
        
         */
}
