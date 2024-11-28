import React from "react";
import styles from "./Loader_magnet.module.css";

const Loader_magnet = () => (
  <div>
    <div id="container">
      <div id="square" className={styles["shimmer"]}></div>
      <div id="content">
        <div id="content-title" className={styles["shimmer"]}></div>
        <div id="content-desc">
          <div className={styles["line"] + styles["shimmer"]}></div>
          <div className={styles["line"] + styles["shimmer"]}></div>
          <div className={styles["line"] + styles["shimmer"]}></div>
          <div className={styles["line"] + styles["shimmer"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_magnet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_magnet = () => (
         <div>
          <div id="container">
  <div id="square" className="shimmer"></div>
  <div id="content">
    <div id="content-title" className="shimmer"></div>
    <div id="content-desc">
      <div className="line shimmer"></div>
      <div className="line shimmer"></div>
      <div className="line shimmer"></div>
      <div className="line shimmer"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_magnet;
        
        
         */
}
