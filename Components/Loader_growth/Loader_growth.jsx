import React from "react";
import styles from "./Loader_growth.module.css";

const Loader_growth = () => (
  <div>
    <div className={styles["loading-spinner"]}>
      <div className={styles["loading-spinner-inner"]}>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_growth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_growth = () => (
         <div>
          <div className="loading-spinner">
  <div className="loading-spinner-inner">
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
  </div>
</div>
        </div>
        );

        export default Loader_growth;
        
        
         */
}
