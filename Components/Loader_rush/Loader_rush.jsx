import React from "react";
import styles from "./Loader_rush.module.css";

const Loader_rush = () => (
  <div>
    <div className={styles["banter-loader"]}>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
    </div>
  </div>
);

export default Loader_rush;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rush = () => (
         <div>
          <div className="banter-loader">
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
</div>
        </div>
        );

        export default Loader_rush;
        
        
         */
}
