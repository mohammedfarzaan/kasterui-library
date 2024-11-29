import React from "react";
import styles from "./Loader_summer.module.css";

const Loader_summer = () => (
  <div>
    <div className={styles["loader-3"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
    </div>
  </div>
);

export default Loader_summer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_summer = () => (
         <div>
          <div className="loader-3">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
</div>
        </div>
        );

        export default Loader_summer;
        
        
         */
}
