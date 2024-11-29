import React from "react";
import styles from "./Toggle_coast.module.css";

const Toggle_coast = () => (
  <div>
    <div className={styles["checkbox-wrapper-9"]}>
      <input
        type="checkbox"
        id="cb4-9"
        className={styles["tgl"] + styles["tgl-flat"]}
      />
      <label for="cb4-9" className={styles["tgl-btn"]}></label>
    </div>
  </div>
);

export default Toggle_coast;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_coast = () => (
         <div>
          <div className="checkbox-wrapper-9">
  <input type="checkbox" id="cb4-9" className="tgl tgl-flat" />
  <label for="cb4-9" className="tgl-btn"></label>
</div>
        </div>
        );

        export default Toggle_coast;
        
        
         */
}
