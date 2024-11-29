import React from "react";
import styles from "./Loader_full.module.css";

const Loader_full = () => (
  <div>
    <div className={styles["loading-box"]}>
      <div
        className={styles["WH"] + styles["animation"] + styles["color"]}
      ></div>
      <div
        className={styles["WH"] + styles["animation"] + styles["color"]}
      ></div>
      <div
        className={styles["WH"] + styles["animation"] + styles["color"]}
      ></div>
    </div>
  </div>
);

export default Loader_full;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_full = () => (
         <div>
          <div className="loading-box">
  <div className="WH animation color"></div>
  <div className="WH animation color"></div>
  <div className="WH animation color"></div>
</div>
        </div>
        );

        export default Loader_full;
        
        
         */
}
