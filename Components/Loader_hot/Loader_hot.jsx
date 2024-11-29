import React from "react";
import styles from "./Loader_hot.module.css";

const Loader_hot = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}>
        <div className={styles["loader-inner"]}></div>
        <div className={styles["loader-inner"]}></div>
        <div className={styles["loader-inner"]}></div>
        <div className={styles["loader-inner"]}></div>
        <div className={styles["loader-inner"]}></div>
        <div className={styles["loader-inner"]}></div>
        <div className={styles["loader-inner"]}></div>
        <div className={styles["loader-inner"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_hot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_hot = () => (
         <div>
          <div className="loader-container">
  <div className="loader">
    <div className="loader-inner"></div>
    <div className="loader-inner"></div>
    <div className="loader-inner"></div>
    <div className="loader-inner"></div>
    <div className="loader-inner"></div>
    <div className="loader-inner"></div>
    <div className="loader-inner"></div>
    <div className="loader-inner"></div>
  </div>
</div>
        </div>
        );

        export default Loader_hot;
        
        
         */
}
