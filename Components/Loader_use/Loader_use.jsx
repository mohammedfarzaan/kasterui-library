import React from "react";
import styles from "./Loader_use.module.css";

const Loader_use = () => (
  <div>
    <div id="container">
      <label className={styles["loading-title"]}>Loading ...</label>
      <span className={styles["loading-circle"] + styles["sp1"]}>
        <span className={styles["loading-circle"] + styles["sp2"]}>
          <span className={styles["loading-circle"] + styles["sp3"]}></span>
        </span>
      </span>
    </div>
  </div>
);

export default Loader_use;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_use = () => (
         <div>
          <div id="container">
  <label className="loading-title">Loading ...</label>
  <span className="loading-circle sp1">
    <span className="loading-circle sp2">
      <span className="loading-circle sp3"></span>
    </span>
  </span>
</div>
        </div>
        );

        export default Loader_use;
        
        
         */
}
