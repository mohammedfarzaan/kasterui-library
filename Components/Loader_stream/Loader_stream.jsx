import React from "react";
import styles from "./Loader_stream.module.css";

const Loader_stream = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["loading-wide"]}>
        <div className={styles["l1"] + styles["color"]}></div>
        <div className={styles["l2"] + styles["color"]}></div>
        <div
          className={
            styles["e1"] + styles["color"] + styles["animation-effect-light"]
          }
        ></div>
        <div
          className={
            styles["e2"] + styles["color"] + styles["animation-effect-light-d"]
          }
        ></div>
        <div className={styles["e3"] + styles["animation-effect-rot"]}>X</div>
        <div
          className={
            styles["e4"] + styles["color"] + styles["animation-effect-light"]
          }
        ></div>
        <div
          className={
            styles["e5"] + styles["color"] + styles["animation-effect-light-d"]
          }
        ></div>
        <div className={styles["e6"] + styles["animation-effect-scale"]}>*</div>
        <div className={styles["e7"] + styles["color"]}></div>
        <div className={styles["e8"] + styles["color"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_stream;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_stream = () => (
         <div>
          <div className="loading">
  <div className="loading-wide">
    <div className="l1 color"></div>
    <div className="l2 color"></div>
    <div className="e1 color animation-effect-light"></div>
    <div className="e2 color animation-effect-light-d"></div>
    <div className="e3 animation-effect-rot">X</div>
    <div className="e4 color animation-effect-light"></div>
    <div className="e5 color animation-effect-light-d"></div>
    <div className="e6 animation-effect-scale">*</div>
    <div className="e7 color"></div>
    <div className="e8 color"></div>
  </div>
</div>
        </div>
        );

        export default Loader_stream;
        
        
         */
}
