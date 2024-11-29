import React from "react";
import styles from "./Loader_rest.module.css";

const Loader_rest = () => (
  <div>
    <div className={styles["eye-lid"]}>
      <div className={styles["eye"]}>
        <div className={styles["cornea"]}>
          <div className={styles["white-pupil"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_rest;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rest = () => (
         <div>
          <div className="eye-lid">
    <div className="eye">
      <div className="cornea">
        <div className="white-pupil"></div>
      </div>
    </div>
  </div>
        </div>
        );

        export default Loader_rest;
        
        
         */
}
