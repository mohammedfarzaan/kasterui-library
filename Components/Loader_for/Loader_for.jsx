import React from "react";
import styles from "./Loader_for.module.css";

const Loader_for = () => (
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

export default Loader_for;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_for = () => (
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

        export default Loader_for;
        
        
         */
}
