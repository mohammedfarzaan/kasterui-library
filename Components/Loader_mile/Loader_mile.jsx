import React from "react";
import styles from "./Loader_mile.module.css";

const Loader_mile = () => (
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

export default Loader_mile;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_mile = () => (
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

        export default Loader_mile;
        
        
         */
}
