import React from "react";
import styles from "./Loader_also.module.css";

const Loader_also = () => (
  <div>
    <div className={styles["my-loader"]}>
      <div className={styles["rubiks-cube"]}>
        <div className={styles["face"] + styles["front"]}>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ffffff;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
        </div>

        <div className={styles["face"] + styles["back"]}>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ffffff;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
        </div>
        <div className={styles["face"] + styles["left"]}>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #ffffff;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
        </div>
        <div className={styles["face"] + styles["right"]}>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ffffff;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
        </div>
        <div className={styles["face"] + styles["top"]}>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #ffffff;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
        </div>
        <div className={styles["face"] + styles["bottom"]}>
          <div style="background: #ffffff;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
          <div style="background: #ffeb3b;" className={styles["cube"]}></div>
          <div style="background: #4caf50;" className={styles["cube"]}></div>
          <div style="background: #2196f3;" className={styles["cube"]}></div>
          <div style="background: #ffffff;" className={styles["cube"]}></div>
          <div style="background: #ff3d00;" className={styles["cube"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_also;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_also = () => (
         <div>
          <div className="my-loader">
  <div className="rubiks-cube">
    <div className="face front">
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ffffff;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
    </div>

    <div className="face back">
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ffffff;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
    </div>
    <div className="face left">
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #ffffff;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
    </div>
    <div className="face right">
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ffffff;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
    </div>
    <div className="face top">
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #ffffff;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
    </div>
    <div className="face bottom">
      <div style="background: #ffffff;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
      <div style="background: #ffeb3b;" className="cube"></div>
      <div style="background: #4caf50;" className="cube"></div>
      <div style="background: #2196f3;" className="cube"></div>
      <div style="background: #ffffff;" className="cube"></div>
      <div style="background: #ff3d00;" className="cube"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_also;
        
        
         */
}
