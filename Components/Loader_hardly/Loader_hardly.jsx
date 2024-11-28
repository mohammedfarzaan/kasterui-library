import React from "react";
import styles from "./Loader_hardly.module.css";

const Loader_hardly = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_hardly;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_hardly = () => (
         <div>
          <div className="container">
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
</div>
        </div>
        );

        export default Loader_hardly;
        
        
         */
}
