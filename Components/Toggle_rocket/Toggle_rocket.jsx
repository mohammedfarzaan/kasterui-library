import React from "react";
import styles from "./Toggle_rocket.module.css";

const Toggle_rocket = () => (
  <div>
    <label className={styles["bb8-toggle"]}>
      <input className={styles["bb8-toggle__checkbox"]} type="checkbox" />
      <div className={styles["bb8-toggle__container"]}>
        <div className={styles["bb8-toggle__scenery"]}>
          <div className={styles["bb8-toggle__star"]}></div>
          <div className={styles["bb8-toggle__star"]}></div>
          <div className={styles["bb8-toggle__star"]}></div>
          <div className={styles["bb8-toggle__star"]}></div>
          <div className={styles["bb8-toggle__star"]}></div>
          <div className={styles["bb8-toggle__star"]}></div>
          <div className={styles["bb8-toggle__star"]}></div>
          <div className={styles["tatto-1"]}></div>
          <div className={styles["tatto-2"]}></div>
          <div className={styles["gomrassen"]}></div>
          <div className={styles["hermes"]}></div>
          <div className={styles["chenini"]}></div>
          <div className={styles["bb8-toggle__cloud"]}></div>
          <div className={styles["bb8-toggle__cloud"]}></div>
          <div className={styles["bb8-toggle__cloud"]}></div>
        </div>
        <div className={styles["bb8"]}>
          <div className={styles["bb8__head-container"]}>
            <div className={styles["bb8__antenna"]}></div>
            <div className={styles["bb8__antenna"]}></div>
            <div className={styles["bb8__head"]}></div>
          </div>
          <div className={styles["bb8__body"]}></div>
        </div>
        <div className={styles["artificial__hidden"]}>
          <div className={styles["bb8__shadow"]}></div>
        </div>
      </div>
    </label>
  </div>
);

export default Toggle_rocket;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_rocket = () => (
         <div>
          <label className="bb8-toggle">
      <input className="bb8-toggle__checkbox" type="checkbox" />
      <div className="bb8-toggle__container">
        <div className="bb8-toggle__scenery">
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="tatto-1"></div>
          <div className="tatto-2"></div>
          <div className="gomrassen"></div>
          <div className="hermes"></div>
          <div className="chenini"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
        </div>
        <div className="bb8">
          <div className="bb8__head-container">
            <div className="bb8__antenna"></div>
            <div className="bb8__antenna"></div>
            <div className="bb8__head"></div>
          </div>
          <div className="bb8__body"></div>
        </div>
        <div className="artificial__hidden">
          <div className="bb8__shadow"></div>
        </div>
      </div>
    </label>
        </div>
        );

        export default Toggle_rocket;
        
        
         */
}
