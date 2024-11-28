import React from "react";
import styles from "./Toggle_yellow.module.css";

const Toggle_yellow = () => (
  <div>
    <div className={styles["flipswitch"]}>
      <input
        checked=""
        id="fs"
        className={styles["flipswitch-cb"]}
        name="flipswitch"
        type="checkbox"
      />
      <label for="fs" className={styles["flipswitch-label"]}>
        <div className={styles["flipswitch-inner"]}></div>
        <div className={styles["flipswitch-switch"]}></div>
      </label>
    </div>
  </div>
);

export default Toggle_yellow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_yellow = () => (
         <div>
          <div className="flipswitch">
    <input checked="" id="fs" className="flipswitch-cb" name="flipswitch" type="checkbox" />
    <label for="fs" className="flipswitch-label">
        <div className="flipswitch-inner"></div>
        <div className="flipswitch-switch"></div>
    </label>
</div>
        </div>
        );

        export default Toggle_yellow;
        
        
         */
}
