import React from "react";
import styles from "./Loader_window.module.css";

const Loader_window = () => (
  <div>
    <div className={styles["hourglassBackground"]}>
      <div className={styles["hourglassContainer"]}>
        <div className={styles["hourglassCurves"]}></div>
        <div className={styles["hourglassCapTop"]}></div>
        <div className={styles["hourglassGlassTop"]}></div>
        <div className={styles["hourglassSand"]}></div>
        <div className={styles["hourglassSandStream"]}></div>
        <div className={styles["hourglassCapBottom"]}></div>
        <div className={styles["hourglassGlass"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_window;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_window = () => (
         <div>
          <div className="hourglassBackground">
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div className="hourglassGlass"></div>
      </div>
    </div>
        </div>
        );

        export default Loader_window;
        
        
         */
}
