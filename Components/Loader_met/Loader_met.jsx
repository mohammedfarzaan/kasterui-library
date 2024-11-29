import React from "react";
import styles from "./Loader_met.module.css";

const Loader_met = () => (
  <div>
    <div className={styles["loader"]}>
      <div style="--i:1" className={styles["loader_item"]}></div>
      <div style="--i:2" className={styles["loader_item"]}></div>
      <div style="--i:3" className={styles["loader_item"]}></div>
      <div style="--i:4" className={styles["loader_item"]}></div>
      <div style="--i:5" className={styles["loader_item"]}></div>
      <div style="--i:6" className={styles["loader_item"]}></div>
      <div style="--i:7" className={styles["loader_item"]}></div>
      <div style="--i:8" className={styles["loader_item"]}></div>
      <div style="--i:9" className={styles["loader_item"]}></div>
      <div style="--i:10" className={styles["loader_item"]}></div>
      <div style="--i:11" className={styles["loader_item"]}></div>
      <div style="--i:12" className={styles["loader_item"]}></div>
    </div>
  </div>
);

export default Loader_met;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_met = () => (
         <div>
          <div className="loader">
  <div style="--i:1" className="loader_item"></div>
  <div style="--i:2" className="loader_item"></div>
  <div style="--i:3" className="loader_item"></div>
  <div style="--i:4" className="loader_item"></div>
  <div style="--i:5" className="loader_item"></div> 
  <div style="--i:6" className="loader_item"></div>
  <div style="--i:7" className="loader_item"></div>
  <div style="--i:8" className="loader_item"></div>
  <div style="--i:9" className="loader_item"></div>
  <div style="--i:10" className="loader_item"></div>
  <div style="--i:11" className="loader_item"></div>
  <div style="--i:12" className="loader_item"></div>
</div>
        </div>
        );

        export default Loader_met;
        
        
         */
}
