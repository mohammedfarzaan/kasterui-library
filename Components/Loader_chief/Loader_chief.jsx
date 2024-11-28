import React from "react";
import styles from "./Loader_chief.module.css";

const Loader_chief = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-inner"]}>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_chief;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_chief = () => (
         <div>
          <div className="loader">
  <div className="loader-inner">
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_chief;
        
        
         */
}
