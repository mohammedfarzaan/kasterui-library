import React from "react";
import styles from "./Loader_own.module.css";

const Loader_own = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["preloader"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Loader_own;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_own = () => (
         <div>
          <div className="container">
  <div className="preloader">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div className="shadow"></div>
</div>
        </div>
        );

        export default Loader_own;
        
        
         */
}
