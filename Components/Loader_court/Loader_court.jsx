import React from "react";
import styles from "./Loader_court.module.css";

const Loader_court = () => (
  <div>
    <div className={styles["loader"]}>
      <div
        className={
          styles["justify-content-center"] + styles["jimu-primary-loading"]
        }
      ></div>
    </div>
  </div>
);

export default Loader_court;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_court = () => (
         <div>
          <div className="loader">
  <div className="justify-content-center jimu-primary-loading"></div>
</div>
        </div>
        );

        export default Loader_court;
        
        
         */
}
