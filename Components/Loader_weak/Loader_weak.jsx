import React from "react";
import styles from "./Loader_weak.module.css";

const Loader_weak = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar"] + styles["bar1"]}></div>
      <div className={styles["bar"] + styles["bar2"]}></div>
      <div className={styles["bar"] + styles["bar3"]}></div>
      <div className={styles["bar"] + styles["bar4"]}></div>
      <div className={styles["bar"] + styles["bar5"]}></div>
      <div className={styles["bar"] + styles["bar6"]}></div>
      <div className={styles["bar"] + styles["bar7"]}></div>
      <div className={styles["bar"] + styles["bar8"]}></div>
    </div>
  </div>
);

export default Loader_weak;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_weak = () => (
         <div>
          <div className="loader">
    <div className="bar bar1"></div>
    <div className="bar bar2"></div>
    <div className="bar bar3"></div>
    <div className="bar bar4"></div>
    <div className="bar bar5"></div>
    <div className="bar bar6"></div>
    <div className="bar bar7"></div>
    <div className="bar bar8"></div>
</div>
        </div>
        );

        export default Loader_weak;
        
        
         */
}
