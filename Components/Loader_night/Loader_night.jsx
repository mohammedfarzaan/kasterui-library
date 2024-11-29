import React from "react";
import styles from "./Loader_night.module.css";

const Loader_night = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["ball"] + styles["ball1"]}></span>
      <span className={styles["ball"]}></span>
      <span className={styles["ball"]}></span>
      <span className={styles["ball"]}></span>
      <span className={styles["ball"]}></span>
    </div>
  </div>
);

export default Loader_night;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_night = () => (
         <div>
          <div className="loader">
  <span className="ball ball1"></span>
  <span className="ball"></span>
  <span className="ball"></span>
  <span className="ball"></span>
  <span className="ball"></span>
</div>
        </div>
        );

        export default Loader_night;
        
        
         */
}
