import React from "react";
import styles from "./Loader_lay.module.css";

const Loader_lay = () => (
  <div>
    <div className={styles["gearbox"]}>
      <div className={styles["overlay"]}></div>
      <div className={styles["gear"] + styles["one"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
      <div className={styles["gear"] + styles["two"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
      <div className={styles["gear"] + styles["three"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
      <div className={styles["gear"] + styles["four"] + styles["large"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_lay;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_lay = () => (
         <div>
          <div className="gearbox">
  <div className="overlay"></div>
    <div className="gear one">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear two">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear three">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear four large">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  </div>
        </div>
        );

        export default Loader_lay;
        
        
         */
}
