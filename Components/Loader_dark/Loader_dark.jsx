import React from "react";
import styles from "./Loader_dark.module.css";

const Loader_dark = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
    </div>

    <div className={styles["loader"] + styles["loader--reflect"]}>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
    </div>
  </div>
);

export default Loader_dark;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_dark = () => (
         <div>
          <div className="loader">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>

<div className="loader loader--reflect">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>
        </div>
        );

        export default Loader_dark;
        
        
         */
}
