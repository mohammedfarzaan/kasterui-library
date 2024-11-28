import React from "react";
import styles from "./Toggle_seat.module.css";

const Toggle_seat = () => (
  <div>
    <div className={styles["container"]}>
      <label className={styles["switch"]}>
        <input className={styles["togglesw"]} type="checkbox" checked="" />
        <div className={styles["indicator"] + styles["left"]}></div>
        <div className={styles["indicator"] + styles["right"]}></div>
        <div className={styles["button"]}></div>
      </label>
    </div>
  </div>
);

export default Toggle_seat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_seat = () => (
         <div>
          <div className="container">
<label className="switch">
  <input className="togglesw" type="checkbox" checked="" />
  <div className="indicator left"></div>
  <div className="indicator right"></div>
  <div className="button"></div>
</label>
</div>
        </div>
        );

        export default Toggle_seat;
        
        
         */
}
