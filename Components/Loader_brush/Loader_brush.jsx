import React from "react";
import styles from "./Loader_brush.module.css";

const Loader_brush = () => (
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

export default Loader_brush;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_brush = () => (
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

        export default Loader_brush;
        
        
         */
}
