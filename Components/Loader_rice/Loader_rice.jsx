import React from "react";
import styles from "./Loader_rice.module.css";

const Loader_rice = () => (
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

export default Loader_rice;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_rice = () => (
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

        export default Loader_rice;
        
        
         */
}
