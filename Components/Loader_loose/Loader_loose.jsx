import React from "react";
import styles from "./Loader_loose.module.css";

const Loader_loose = () => (
  <div>
    <div className={styles["loader-1"]}>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
    </div>
  </div>
);

export default Loader_loose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_loose = () => (
         <div>
          <div className="loader-1">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div></div>
        </div>
        );

        export default Loader_loose;
        
        
         */
}
