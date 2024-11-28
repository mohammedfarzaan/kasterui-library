import React from "react";
import styles from "./Toggle_raise.module.css";

const Toggle_raise = () => (
  <div>
    <label className={styles["switch"]}>
      <div className={styles["round"]}>
        <input name="onoff" id="onoff" type="checkbox" />
        <div className={styles["back"]}>
          <label for="onoff" className={styles["but"]}>
            <span className={styles["on"]}>0</span>
            <span className={styles["off"]}>I</span>
          </label>
        </div>
      </div>
    </label>
  </div>
);

export default Toggle_raise;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_raise = () => (
         <div>
          <label className="switch">
    <div className="round"><input name="onoff" id="onoff" type="checkbox" />
        <div className="back"><label for="onoff" className="but"><span className="on">0</span><span className="off">I</span></label></div>
    </div>
</label>
        </div>
        );

        export default Toggle_raise;
        
        
         */
}
