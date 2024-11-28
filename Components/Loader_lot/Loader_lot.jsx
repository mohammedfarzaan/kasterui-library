import React from "react";
import styles from "./Loader_lot.module.css";

const Loader_lot = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
    </div>
  </div>
);

export default Loader_lot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_lot = () => (
         <div>
          <div className="spinner">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div></div>
        </div>
        );

        export default Loader_lot;
        
        
         */
}