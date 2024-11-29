import React from "react";
import styles from "./Loader_base.module.css";

const Loader_base = () => (
  <div>
    <div className={styles["loader"]}>
      <span style="--delay:1" className={styles["ball"]}></span>
      <span style="--delay:2" className={styles["ball"]}></span>
      <span style="--delay:3" className={styles["ball"]}></span>
      <span style="--delay:4" className={styles["ball"]}></span>
      <span style="--delay:5" className={styles["ball"]}></span>
      <span style="--delay:6" className={styles["ball"]}></span>
      <span style="--delay:7" className={styles["ball"]}></span>
      <span style="--delay:8" className={styles["ball"]}></span>
    </div>
  </div>
);

export default Loader_base;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_base = () => (
         <div>
          <div className="loader">
  <span style="--delay:1" className="ball"></span>
  <span style="--delay:2" className="ball"></span>
  <span style="--delay:3" className="ball"></span>
  <span style="--delay:4" className="ball"></span>
  <span style="--delay:5" className="ball"></span>
  <span style="--delay:6" className="ball"></span>
  <span style="--delay:7" className="ball"></span>
  <span style="--delay:8" className="ball"></span>
</div>
        </div>
        );

        export default Loader_base;
        
        
         */
}
