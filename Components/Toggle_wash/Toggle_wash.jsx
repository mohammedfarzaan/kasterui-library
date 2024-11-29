import React from "react";
import styles from "./Toggle_wash.module.css";

const Toggle_wash = () => (
  <div>
    <div className={styles["switch-holder"]}>
      <div className={styles["switch-label"]}>
        <i className={styles["fa"] + styles["fa-bluetooth-b"]}></i>
        <span>Bluetooth</span>
      </div>
      <div className={styles["switch-toggle"]}>
        <input type="checkbox" id="bluetooth" />
        <label for="bluetooth"></label>
      </div>
    </div>
  </div>
);

export default Toggle_wash;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_wash = () => (
         <div>
          <div className="switch-holder">
    <div className="switch-label">
        <i className="fa fa-bluetooth-b"></i><span>Bluetooth</span>
    </div>
    <div className="switch-toggle">
        <input type="checkbox" id="bluetooth" />
        <label for="bluetooth"></label>
    </div>
</div>
        </div>
        );

        export default Toggle_wash;
        
        
         */
}
