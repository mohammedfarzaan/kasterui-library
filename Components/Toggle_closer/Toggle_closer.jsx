import React from "react";
import styles from "./Toggle_closer.module.css";

const Toggle_closer = () => (
  <div>
    <div className={styles["switch"]}>
      <label for="toggle">
        <div className={styles["background"]}></div>
        <input
          checked=""
          type="checkbox"
          className={styles["toggle-switch"]}
          id="toggle"
        />
        <div className={styles["cookie"]}>
          <span className={styles["cookie-part-1"]}></span>
          <span className={styles["cookie-part-2"]}></span>
          <span className={styles["cookie-part-3"]}></span>
          <span className={styles["cookie-part-4"]}></span>
          <span className={styles["chocolate-chips-1a"]}></span>
          <span className={styles["chocolate-chips-1b"]}></span>
          <span className={styles["chocolate-chips-1c"]}></span>
          <span className={styles["chocolate-chips-1d"]}></span>
          <span className={styles["chocolate-chips-2a"]}></span>
          <span className={styles["chocolate-chips-2b"]}></span>
          <span className={styles["chocolate-chips-2c"]}></span>
          <span className={styles["chocolate-chips-2d"]}></span>
          <span className={styles["chocolate-chips-2e"]}></span>
          <span className={styles["chocolate-chips-3a"]}></span>
          <span className={styles["chocolate-chips-3b"]}></span>
          <span className={styles["chocolate-chips-3c"]}></span>
          <span className={styles["chocolate-chips-4a"]}></span>
          <span className={styles["chocolate-chips-4b"]}></span>
          <span className={styles["chocolate-chips-4c"]}></span>
        </div>
      </label>
    </div>
  </div>
);

export default Toggle_closer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_closer = () => (
         <div>
          <div className="switch">
        <label for="toggle">
            <div className="background"></div>
            <input checked="" type="checkbox" className="toggle-switch" id="toggle" />
            <div className="cookie">
                <span className="cookie-part-1"></span>
                <span className="cookie-part-2"></span>
                <span className="cookie-part-3"></span>
                <span className="cookie-part-4"></span>
                <span className="chocolate-chips-1a"></span>
                <span className="chocolate-chips-1b"></span>
                <span className="chocolate-chips-1c"></span>
                <span className="chocolate-chips-1d"></span>
                <span className="chocolate-chips-2a"></span>
                <span className="chocolate-chips-2b"></span>
                <span className="chocolate-chips-2c"></span>
                <span className="chocolate-chips-2d"></span>
                <span className="chocolate-chips-2e"></span>
                <span className="chocolate-chips-3a"></span>
                <span className="chocolate-chips-3b"></span>
                <span className="chocolate-chips-3c"></span>
                <span className="chocolate-chips-4a"></span>
                <span className="chocolate-chips-4b"></span>
                <span className="chocolate-chips-4c"></span>
            </div>
        </label>
    </div>
        </div>
        );

        export default Toggle_closer;
        
        
         */
}
