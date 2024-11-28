import React from "react";
import styles from "./Loader_sand.module.css";

const Loader_sand = () => (
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

export default Loader_sand;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_sand = () => (
         <div>
          <div className="loading-box">
  <div className="WH animation color"></div>
  <div className="WH animation color"></div>
  <div className="WH animation color"></div>
</div>
        </div>
        );

        export default Loader_sand;
        
        
         */
}
