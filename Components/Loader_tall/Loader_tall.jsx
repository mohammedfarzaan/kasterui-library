import React from "react";
import styles from "./Loader_tall.module.css";

const Loader_tall = () => (
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

export default Loader_tall;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_tall = () => (
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

        export default Loader_tall;
        
        
         */
}
