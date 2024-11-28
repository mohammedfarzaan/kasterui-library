import React from "react";
import styles from "./Loader_task.module.css";

const Loader_task = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["cloud"] + styles["front"]}>
        <span className={styles["left-front"]}></span>
        <span className={styles["right-front"]}></span>
      </div>
      <span className={styles["sun"] + styles["sunshine"]}></span>
      <span className={styles["sun"]}></span>
      <div className={styles["cloud"] + styles["back"]}>
        <span className={styles["left-back"]}></span>
        <span className={styles["right-back"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_task;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_task = () => (
         <div>
          <div className="container">
  <div className="cloud front">
    <span className="left-front"></span>
    <span className="right-front"></span>
  </div>
  <span className="sun sunshine"></span>
  <span className="sun"></span>
  <div className="cloud back">
    <span className="left-back"></span>
    <span className="right-back"></span>
  </div>
</div>
        </div>
        );

        export default Loader_task;
        
        
         */
}
