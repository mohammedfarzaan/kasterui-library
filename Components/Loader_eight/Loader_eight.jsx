import React from "react";
import styles from "./Loader_eight.module.css";

const Loader_eight = () => (
  <div>
    <div className={styles["load"]}>
      <div className={styles["progress"]}></div>
      <div className={styles["progress"]}></div>
      <div className={styles["progress"]}></div>
    </div>
  </div>
);

export default Loader_eight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_eight = () => (
         <div>
          <div className="load">
    <div className="progress"></div>
    <div className="progress"></div>
    <div className="progress"></div>
</div>
        </div>
        );

        export default Loader_eight;
        
        
         */
}
