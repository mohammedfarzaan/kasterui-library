import React from "react";
import styles from "./Loader_ground.module.css";

const Loader_ground = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-bar"] + styles["bar-1"]}></div>
      <div className={styles["loader-bar"] + styles["bar-2"]}></div>
      <div className={styles["loader-bar"] + styles["bar-3"]}></div>
      <div className={styles["loader-bar"] + styles["bar-4"]}></div>
    </div>
  </div>
);

export default Loader_ground;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_ground = () => (
         <div>
          <div className="loader">
  <div className="loader-bar bar-1"></div>
  <div className="loader-bar bar-2"></div>
  <div className="loader-bar bar-3"></div>
  <div className="loader-bar bar-4"></div>
</div>
        </div>
        );

        export default Loader_ground;
        
        
         */
}
