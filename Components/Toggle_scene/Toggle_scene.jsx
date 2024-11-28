import React from "react";
import styles from "./Toggle_scene.module.css";

const Toggle_scene = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <div className={styles["slider"]}></div>
      <div className={styles["slider-card"]}>
        <div
          className={styles["slider-card-face"] + styles["slider-card-front"]}
        ></div>
        <div
          className={styles["slider-card-face"] + styles["slider-card-back"]}
        ></div>
      </div>
    </label>
  </div>
);

export default Toggle_scene;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_scene = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <div className="slider"></div>
  <div className="slider-card">
    <div className="slider-card-face slider-card-front"></div>
    <div className="slider-card-face slider-card-back"></div>
  </div>
</label>
        </div>
        );

        export default Toggle_scene;
        
        
         */
}
