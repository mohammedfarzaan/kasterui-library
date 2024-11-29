import React from "react";
import styles from "./Loader_memory.module.css";

const Loader_memory = () => (
  <div>
    <div className={styles["pinwheel"]}>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
    </div>
  </div>
);

export default Loader_memory;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_memory = () => (
         <div>
          <div className="pinwheel">
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
</div>
        </div>
        );

        export default Loader_memory;
        
        
         */
}
