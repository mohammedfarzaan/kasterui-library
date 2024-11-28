import React from "react";
import styles from "./Loader_guide.module.css";

const Loader_guide = () => (
  <div>
    <div className={styles["loader"]}>
      <span style="--i:1px" className={styles["load"]}></span>
      <span style="--i:2px" className={styles["load"]}></span>
      <span style="--i:3px" className={styles["load"]}></span>
      <span style="--i:4px" className={styles["load"]}></span>
      <span style="--i:5px" className={styles["load"]}></span>
      <span style="--i:6px" className={styles["load"]}></span>
      <span style="--i:7px" className={styles["load"]}></span>
      <span style="--i:8px" className={styles["load"]}></span>
      <span style="--i:9px" className={styles["load"]}></span>
      <span style="--i:10px" className={styles["load"]}></span>
    </div>
  </div>
);

export default Loader_guide;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_guide = () => (
         <div>
          <div className="loader">
  <span style="--i:1px" className="load"></span>
  <span style="--i:2px" className="load"></span>
  <span style="--i:3px" className="load"></span>
  <span style="--i:4px" className="load"></span>
  <span style="--i:5px" className="load"></span>
  <span style="--i:6px" className="load"></span>
  <span style="--i:7px" className="load"></span>
  <span style="--i:8px" className="load"></span>
  <span style="--i:9px" className="load"></span>
  <span style="--i:10px" className="load"></span>
</div>
        </div>
        );

        export default Loader_guide;
        
        
         */
}
