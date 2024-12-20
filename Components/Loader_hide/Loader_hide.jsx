import React from "react";
import styles from "./Loader_hide.module.css";

const Loader_hide = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar1"]}></div>
      <div className={styles["bar2"]}></div>
      <div className={styles["bar3"]}></div>
      <div className={styles["bar4"]}></div>
      <div className={styles["bar5"]}></div>
      <div className={styles["bar6"]}></div>
      <div className={styles["bar7"]}></div>
      <div className={styles["bar8"]}></div>
      <div className={styles["bar9"]}></div>
      <div className={styles["bar10"]}></div>
      <div className={styles["bar11"]}></div>
      <div className={styles["bar12"]}></div>
    </div>
  </div>
);

export default Loader_hide;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_hide = () => (
         <div>
          <div className="loader">
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    <div className="bar4"></div>
    <div className="bar5"></div>
    <div className="bar6"></div>
    <div className="bar7"></div>
    <div className="bar8"></div>
    <div className="bar9"></div>
    <div className="bar10"></div>
    <div className="bar11"></div>
    <div className="bar12"></div>
</div>
        </div>
        );

        export default Loader_hide;
        
        
         */
}
