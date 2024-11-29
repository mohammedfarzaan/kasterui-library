import React from "react";
import styles from "./Loader_many.module.css";

const Loader_many = () => (
  <div>
    <div className={styles["terminal-loader"]}>
      <div className={styles["terminal-header"]}>
        <div className={styles["terminal-title"]}>Status</div>
        <div className={styles["terminal-controls"]}>
          <div className={styles["control"] + styles["close"]}></div>
          <div className={styles["control"] + styles["minimize"]}></div>
          <div className={styles["control"] + styles["maximize"]}></div>
        </div>
      </div>
      <div className={styles["text"]}>Loading...</div>
    </div>
  </div>
);

export default Loader_many;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_many = () => (
         <div>
          <div className="terminal-loader">
  <div className="terminal-header">
    <div className="terminal-title">Status</div>
    <div className="terminal-controls">
      <div className="control close"></div>
      <div className="control minimize"></div>
      <div className="control maximize"></div>
    </div>
  </div>
  <div className="text">Loading...</div>
</div>
        </div>
        );

        export default Loader_many;
        
        
         */
}
