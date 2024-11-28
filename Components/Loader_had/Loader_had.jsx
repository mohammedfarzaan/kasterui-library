import React from "react";
import styles from "./Loader_had.module.css";

const Loader_had = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box"] + styles["box-1"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
      <div className={styles["box"] + styles["box-2"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
      <div className={styles["box"] + styles["box-3"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
      <div className={styles["box"] + styles["box-4"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_had;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_had = () => (
         <div>
          <div className="loader">
  <div className="box box-1">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-2">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-3">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-4">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
</div>
        </div>
        );

        export default Loader_had;
        
        
         */
}
