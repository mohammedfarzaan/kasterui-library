import React from "react";
import styles from "./Toggle_major.module.css";

const Toggle_major = () => (
  <div>
    <div className={styles["checkbox-wrapper-10"]}>
      <input
        checked=""
        type="checkbox"
        id="cb5"
        className={styles["tgl"] + styles["tgl-flip"]}
      />
      <label
        for="cb5"
        data-tg-on="On"
        data-tg-off="Off"
        className={styles["tgl-btn"]}
      ></label>
    </div>
  </div>
);

export default Toggle_major;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_major = () => (
         <div>
          <div className="checkbox-wrapper-10">
  <input checked="" type="checkbox" id="cb5" className="tgl tgl-flip" />
  <label for="cb5" data-tg-on="On" data-tg-off="Off" className="tgl-btn"></label>
</div>
        </div>
        );

        export default Toggle_major;
        
        
         */
}
