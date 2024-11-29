import React from "react";
import styles from "./Toggle_forget.module.css";

const Toggle_forget = () => (
  <div>
    <div className={styles["toggle-button-cover"]}>
      <div id="button-3" className={styles["button"] + styles["r"]}>
        <input className={styles["checkbox"]} type="checkbox" />
        <div className={styles["knobs"]}></div>
        <div className={styles["layer"]}></div>
      </div>
    </div>
  </div>
);

export default Toggle_forget;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_forget = () => (
         <div>
          <div className="toggle-button-cover">
        <div id="button-3" className="button r">
          <input className="checkbox" type="checkbox" />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
        </div>
        );

        export default Toggle_forget;
        
        
         */
}
