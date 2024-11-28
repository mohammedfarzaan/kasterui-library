import React from "react";
import styles from "./Loader_hunter.module.css";

const Loader_hunter = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["d1"]}></div>
      <div className={styles["d2"]}></div>
    </div>
  </div>
);

export default Loader_hunter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_hunter = () => (
         <div>
          <div className="loading">
    <div className="d1"></div>
    <div className="d2"></div>
</div>
        </div>
        );

        export default Loader_hunter;
        
        
         */
}
