import React from "react";
import styles from "./Loader_hunt.module.css";

const Loader_hunt = () => (
  <div>
    <div className={styles["terminal"]}>
      <div className={styles["terminal-header"]}>
        <div className={styles["buttons"]}>
          <span className={styles["close"]}></span>
          <span className={styles["minimize"]}></span>
          <span className={styles["maximize"]}></span>
        </div>
        <div className={styles["title"]}>Status</div>
      </div>
      <div className={styles["terminal-body"]}>
        <div className={styles["terminal-loader"]}>
          <span className={styles["loader-text"]}>Loading</span>
          <span id="dot1" className={styles["dot"]}>
            .
          </span>
          <span id="dot2" className={styles["dot"]}>
            .
          </span>
          <span id="dot3" className={styles["dot"]}>
            .
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_hunt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_hunt = () => (
         <div>
          <div className="terminal">
  <div className="terminal-header">
    <div className="buttons">
      <span className="close"></span>
      <span className="minimize"></span>
      <span className="maximize"></span>
    </div>
    <div className="title">Status</div>
  </div>
  <div className="terminal-body">
    <div className="terminal-loader">
      <span className="loader-text">Loading</span>
      <span id="dot1" className="dot">.</span>
      <span id="dot2" className="dot">.</span>
      <span id="dot3" className="dot">.</span>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_hunt;
        
        
         */
}
