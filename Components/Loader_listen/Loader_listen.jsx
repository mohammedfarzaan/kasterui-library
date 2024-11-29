import React from "react";
import styles from "./Loader_listen.module.css";

const Loader_listen = () => (
  <div>
    <div className={styles["orwellian-container"]}>
      <div className={styles["orwellian-loader"]}>
        <div className={styles["eye"]}>
          <div className={styles["pupil"]}></div>
          <div className={styles["eyelid"]}></div>
        </div>
        <div className={styles["spotlight"]}></div>
        <div className={styles["text"]}>BIG BROTHER IS LOADING</div>
        <div className={styles["scan-lines"]}></div>
        <div className={styles["tv-effect"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_listen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_listen = () => (
         <div>
          <div className="orwellian-container">
  <div className="orwellian-loader">
    <div className="eye">
      <div className="pupil"></div>
      <div className="eyelid"></div>
    </div>
    <div className="spotlight"></div>
    <div className="text">BIG BROTHER IS LOADING</div>
    <div className="scan-lines"></div>
    <div className="tv-effect"></div>
  </div>
</div>
        </div>
        );

        export default Loader_listen;
        
        
         */
}
