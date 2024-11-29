import React from "react";
import styles from "./Loader_wise.module.css";

const Loader_wise = () => (
  <div>
    <div className={styles["cube"]}>
      <div className={styles["topD"]}></div>
      <div>
        <span style="--i:0"></span>
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
      </div>

      <div className={styles["cube2"]}>
        <div>
          <span style="--i:0"></span>
          <span style="--i:1"></span>
          <span style="--i:2"></span>
          <span style="--i:3"></span>
        </div>

        <div className={styles["cube3"]}>
          <div className={styles["top3"]}></div>
          <div>
            <span style="--i:0"></span>
            <span style="--i:1"></span>
            <span style="--i:2"></span>
            <span style="--i:3"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_wise;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_wise = () => (
         <div>
          <div className="cube">
  <div className="topD"></div>
  <div>
    <span style="--i:0"></span>
    <span style="--i:1"></span>
    <span style="--i:2"></span>
    <span style="--i:3"></span>
  </div>

  <div className="cube2">
    <div>
      <span style="--i:0"></span>
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
    </div>

    <div className="cube3">
      <div className="top3"></div>
      <div>
        <span style="--i:0"></span>
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
      </div>

    </div>

  </div>
</div>
        </div>
        );

        export default Loader_wise;
        
        
         */
}
