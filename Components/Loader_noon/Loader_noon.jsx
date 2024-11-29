import React from "react";
import styles from "./Loader_noon.module.css";

const Loader_noon = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-cube"]}>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_noon;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_noon = () => (
         <div>
          <div className="loader">
    <div className="loader-cube">
      <div className="face"></div>
      <div className="face"></div>
      <div className="face"></div>
      <div className="face"></div>
      <div className="face"></div>
      <div className="face"></div>
    </div>
  </div>
        </div>
        );

        export default Loader_noon;
        
        
         */
}
