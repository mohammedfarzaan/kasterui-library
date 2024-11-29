import React from "react";
import styles from "./Loader_trade.module.css";

const Loader_trade = () => (
  <div>
    <div className={styles["loader-wrapper"]}>
      <div className={styles["loader"]}>
        <div className={styles["loader"] + styles["loader-inner"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_trade;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_trade = () => (
         <div>
          <div className="loader-wrapper">
<div className="loader">
  <div className="loader loader-inner"></div>
  </div>
</div>
        </div>
        );

        export default Loader_trade;
        
        
         */
}
