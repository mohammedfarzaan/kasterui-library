import React from "react";
import styles from "./Loader_weak.module.css";

const Loader_weak = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}></div>
      <div className={styles["loader-text"]}>Loading...</div>
    </div>
  </div>
);

export default Loader_weak;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_weak = () => (
         <div>
          <div className="loader-container">
  <div className="loader"></div>
  <div className="loader-text">Loading...</div>
</div>
        </div>
        );

        export default Loader_weak;
        
        
         */
}
