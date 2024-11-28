import React from "react";
import styles from "./Loader_dried.module.css";

const Loader_dried = () => (
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

export default Loader_dried;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_dried = () => (
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

        export default Loader_dried;
        
        
         */
}
