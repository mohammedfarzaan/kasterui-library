import React from "react";
import styles from "./Loader_fellow.module.css";

const Loader_fellow = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
    </div>
  </div>
);

export default Loader_fellow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fellow = () => (
         <div>
          <div className="loader">
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
</div>
        </div>
        );

        export default Loader_fellow;
        
        
         */
}
