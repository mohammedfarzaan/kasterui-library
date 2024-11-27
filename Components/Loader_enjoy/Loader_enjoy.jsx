import React from "react";
import styles from "./Loader_enjoy.module.css";

const Loader_enjoy = () => (
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

export default Loader_enjoy;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_enjoy = () => (
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

        export default Loader_enjoy;
        
        
         */
}
