import React from "react";
import styles from "./Loader_valley.module.css";

const Loader_valley = () => (
  <div>
    <div
      style="--size: 64px; --dot-size: 6px; --dot-count: 6; --color: #fff; --speed: 1s; --spread: 60deg;"
      className={styles["dots"]}
    >
      <div style="--i: 0;" className={styles["dot"]}></div>
      <div style="--i: 1;" className={styles["dot"]}></div>
      <div style="--i: 2;" className={styles["dot"]}></div>
      <div style="--i: 3;" className={styles["dot"]}></div>
      <div style="--i: 4;" className={styles["dot"]}></div>
      <div style="--i: 5;" className={styles["dot"]}></div>
    </div>
  </div>
);

export default Loader_valley;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_valley = () => (
         <div>
          <div style="--size: 64px; --dot-size: 6px; --dot-count: 6; --color: #fff; --speed: 1s; --spread: 60deg;" className="dots">
  <div style="--i: 0;" className="dot"></div>
  <div style="--i: 1;" className="dot"></div>
  <div style="--i: 2;" className="dot"></div>
  <div style="--i: 3;" className="dot"></div>
  <div style="--i: 4;" className="dot"></div>
  <div style="--i: 5;" className="dot"></div>
</div>
        </div>
        );

        export default Loader_valley;
        
        
         */
}
