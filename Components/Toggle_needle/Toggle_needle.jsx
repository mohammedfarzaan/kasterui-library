import React from "react";
import styles from "./Toggle_needle.module.css";

const Toggle_needle = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" checked="checked" />
      <div className={styles["button"]}>
        <div className={styles["light"]}></div>
        <div className={styles["dots"]}></div>
        <div className={styles["characters"]}></div>
        <div className={styles["shine"]}></div>
        <div className={styles["shadow"]}></div>
      </div>
    </label>
  </div>
);

export default Toggle_needle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_needle = () => (
         <div>
          <label className="switch">
  <input type="checkbox" checked="checked" />
  <div className="button">
    <div className="light"></div>
    <div className="dots"></div>
    <div className="characters"></div>
    <div className="shine"></div>
    <div className="shadow"></div>
  </div>
</label>
        </div>
        );

        export default Toggle_needle;
        
        
         */
}
