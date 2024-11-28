import React from "react";
import styles from "./Loader_deal.module.css";

const Loader_deal = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cube"]}>
        <div className={styles["face1"]}></div>
        <div className={styles["face2"]}></div>
        <div className={styles["face3"]}></div>
        <div className={styles["face4"]}></div>
        <div className={styles["face5"]}></div>
        <div className={styles["face6"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_deal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_deal = () => (
         <div>
          <div className="loader">
  <div className="cube">
    <div className="face1"></div>
    <div className="face2"></div>
    <div className="face3"></div>
    <div className="face4"></div>
    <div className="face5"></div>
    <div className="face6"></div>
  </div>
</div>
        </div>
        );

        export default Loader_deal;
        
        
         */
}
