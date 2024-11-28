import React from "react";
import styles from "./Toggle_share.module.css";

const Toggle_share = () => (
  <div>
    <div id="menuToggle">
      <input id="checkbox" type="checkbox" />
      <label className={styles["toggle"]} for="checkbox">
        <div className={styles["bar"] + styles["bar--top"]}></div>
        <div className={styles["bar"] + styles["bar--middle"]}></div>
        <div className={styles["bar"] + styles["bar--bottom"]}></div>
      </label>
    </div>
  </div>
);

export default Toggle_share;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_share = () => (
         <div>
          <div id="menuToggle">
  <input id="checkbox" type="checkbox" />
  <label className="toggle" for="checkbox">
      <div className="bar bar--top"></div>
      <div className="bar bar--middle"></div>
      <div className="bar bar--bottom"></div>
  </label>
</div>
        </div>
        );

        export default Toggle_share;
        
        
         */
}
