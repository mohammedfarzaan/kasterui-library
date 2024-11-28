import React from "react";
import styles from "./Loader_rubbed.module.css";

const Loader_rubbed = () => (
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

export default Loader_rubbed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rubbed = () => (
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

        export default Loader_rubbed;
        
        
         */
}
