import React from "react";
import styles from "./Loader_else.module.css";

const Loader_else = () => (
  <div>
    <div className={styles["cube-loader"]}>
      <div className={styles["cube-top"]}></div>
      <div className={styles["cube-wrapper"]}>
        <span style="--i:0" className={styles["cube-span"]}></span>
        <span style="--i:1" className={styles["cube-span"]}></span>
        <span style="--i:2" className={styles["cube-span"]}></span>
        <span style="--i:3" className={styles["cube-span"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_else;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_else = () => (
         <div>
          <div className="cube-loader">
  <div className="cube-top"></div>
  <div className="cube-wrapper">
    <span style="--i:0" className="cube-span"></span>
    <span style="--i:1" className="cube-span"></span>
    <span style="--i:2" className="cube-span"></span>
    <span style="--i:3" className="cube-span"></span>
  </div>
</div>
        </div>
        );

        export default Loader_else;
        
        
         */
}
