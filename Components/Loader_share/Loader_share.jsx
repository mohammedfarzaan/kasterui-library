import React from "react";
import styles from "./Loader_share.module.css";

const Loader_share = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["red"] + styles["bar"]}></div>
      <div className={styles["orange"] + styles["bar"]}></div>
      <div className={styles["yellow"] + styles["bar"]}></div>
      <div className={styles["green"] + styles["bar"]}></div>
      <div className={styles["blue"] + styles["bar"]}></div>
      <div className={styles["violet"] + styles["bar"]}></div>
    </div>
  </div>
);

export default Loader_share;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_share = () => (
         <div>
          <div className="loader">
  <div className="red bar"></div>
  <div className="orange bar"></div>
  <div className="yellow bar"></div>
  <div className="green bar"></div>
  <div className="blue bar"></div>
  <div className="violet bar"></div>
</div>
        </div>
        );

        export default Loader_share;
        
        
         */
}
