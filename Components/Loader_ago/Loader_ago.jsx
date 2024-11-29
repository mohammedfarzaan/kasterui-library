import React from "react";
import styles from "./Loader_ago.module.css";

const Loader_ago = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_ago;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_ago = () => (
         <div>
          <div className="loader-container">
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
        </div>
        );

        export default Loader_ago;
        
        
         */
}
