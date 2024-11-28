import React from "react";
import styles from "./Loader_bear.module.css";

const Loader_bear = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["worm"]}></div>
      <div className={styles["circleMiddle"]}></div>
    </div>
  </div>
);

export default Loader_bear;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bear = () => (
         <div>
          <div className="loader">
  <div className="worm"></div>
  <div className="circleMiddle"></div>
</div>
        </div>
        );

        export default Loader_bear;
        
        
         */
}