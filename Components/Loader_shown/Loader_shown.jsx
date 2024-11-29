import React from "react";
import styles from "./Loader_shown.module.css";

const Loader_shown = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}>
        <div className={styles["face"] + styles["front"]}></div>
        <div className={styles["face"] + styles["back"]}></div>
        <div className={styles["face"] + styles["left"]}></div>
        <div className={styles["face"] + styles["right"]}></div>
        <div className={styles["face"] + styles["top"]}></div>
        <div className={styles["face"] + styles["bottom"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_shown;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_shown = () => (
         <div>
          <div className="loader-container">
    <div className="loader">
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  </div>
        </div>
        );

        export default Loader_shown;
        
        
         */
}
