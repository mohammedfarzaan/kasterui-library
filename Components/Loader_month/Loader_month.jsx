import React from "react";
import styles from "./Loader_month.module.css";

const Loader_month = () => (
  <div>
    <div className={styles["cube-loader"]}>
      <div className={styles["cube"] + styles["cube1"]}></div>
      <div className={styles["cube"] + styles["cube2"]}></div>
      <div className={styles["cube"] + styles["cube3"]}></div>
      <div className={styles["cube"] + styles["cube4"]}></div>
    </div>
  </div>
);

export default Loader_month;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_month = () => (
         <div>
          <div className="cube-loader">
  <div className="cube cube1"></div>
  <div className="cube cube2"></div>
  <div className="cube cube3"></div>
  <div className="cube cube4"></div>
</div>
        </div>
        );

        export default Loader_month;
        
        
         */
}
