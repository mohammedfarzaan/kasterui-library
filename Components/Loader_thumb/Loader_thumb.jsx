import React from "react";
import styles from "./Loader_thumb.module.css";

const Loader_thumb = () => (
  <div>
    <div className={styles["cloader"]}>
      <div className={styles["clface"]}>
        <div className={styles["clsface"]}>
          <div id="h2" className={styles["hand"]}></div>
        </div>
        <div className={styles["top"]}></div>
        <div className={styles["bottom"]}></div>
        <div className={styles["left"]}></div>
        <div className={styles["right"]}></div>
        <div id="sub" className={styles["pin"]}></div>
        <div id="h1" className={styles["hand"]}></div>
        <div id="main" className={styles["pin"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_thumb;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_thumb = () => (
         <div>
          <div className="cloader">
  <div className="clface">
    <div className="clsface">
      <div id="h2" className="hand"></div>
    </div>
    <div className="top"></div>
    <div className="bottom"></div>
    <div className="left"></div>
    <div className="right"></div>
    <div id="sub" className="pin"></div>
    <div id="h1" className="hand"></div>
    <div id="main" className="pin"></div>
  </div>
</div>
        </div>
        );

        export default Loader_thumb;
        
        
         */
}
