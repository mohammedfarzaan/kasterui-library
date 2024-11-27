import React from "react";
import styles from "./Loader_coming.module.css";

const Loader_coming = () => (
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

export default Loader_coming;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_coming = () => (
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

        export default Loader_coming;
        
        
         */
}
