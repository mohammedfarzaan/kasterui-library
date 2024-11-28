import React from "react";
import styles from "./Loader_full.module.css";

const Loader_full = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["modelViewPort"]}>
        <div className={styles["eva"]}>
          <div className={styles["head"]}>
            <div className={styles["eyeChamber"]}>
              <div className={styles["eye"]}></div>
              <div className={styles["eye"]}></div>
            </div>
          </div>
          <div className={styles["body"]}>
            <div className={styles["hand"]}></div>
            <div className={styles["hand"]}></div>
            <div className={styles["scannerThing"]}></div>
            <div className={styles["scannerOrigin"]}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_full;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_full = () => (
         <div>
          <div className="loader">
  <div className="modelViewPort">
    <div className="eva">
      <div className="head">
        <div className="eyeChamber">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>
      <div className="body">
        <div className="hand"></div>
        <div className="hand"></div>
        <div className="scannerThing"></div>
        <div className="scannerOrigin"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_full;
        
        
         */
}
