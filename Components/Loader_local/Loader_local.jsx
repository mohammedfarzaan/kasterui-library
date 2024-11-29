import React from "react";
import styles from "./Loader_local.module.css";

const Loader_local = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box-load1"]}></div>
      <div className={styles["box-load2"]}></div>
      <div className={styles["box-load3"]}></div>
    </div>
  </div>
);

export default Loader_local;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_local = () => (
         <div>
          <div className="loader">
  <div className="box-load1"></div>
  <div className="box-load2"></div>
  <div className="box-load3"></div>
</div>
        </div>
        );

        export default Loader_local;
        
        
         */
}
