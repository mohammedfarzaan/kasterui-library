import React from "react";
import styles from "./Loader_slow.module.css";

const Loader_slow = () => (
  <div>
    <div className={styles["center"]}>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
    </div>
  </div>
);

export default Loader_slow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_slow = () => (
         <div>
          <div className="center">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
</div>
        </div>
        );

        export default Loader_slow;
        
        
         */
}
