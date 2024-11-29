import React from "react";
import styles from "./Loader_hard.module.css";

const Loader_hard = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cube"]}>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_hard;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_hard = () => (
         <div>
          <div className="loader">
  <div className="cube">
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
  </div>
</div>
        </div>
        );

        export default Loader_hard;
        
        
         */
}
