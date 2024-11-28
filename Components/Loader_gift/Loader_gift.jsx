import React from "react";
import styles from "./Loader_gift.module.css";

const Loader_gift = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["loading-box"]}>
        <div className={styles["grid"]}>
          <div className={styles["color"] + styles["l1"]}></div>
          <div className={styles["color"] + styles["l2"]}></div>
          <div className={styles["color"] + styles["l3"]}></div>
          <div className={styles["color"] + styles["l4"]}></div>
          <div className={styles["color"] + styles["l5"]}></div>
          <div className={styles["color"] + styles["l6"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_gift;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_gift = () => (
         <div>
          <div className="loading">
  <div className="loading-box">
    <div className="grid">
      <div className="color l1"></div>
      <div className="color l2"></div>
      <div className="color l3"></div>
      <div className="color l4"></div>
      <div className="color l5"></div>
      <div className="color l6"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_gift;
        
        
         */
}
