import React from "react";
import styles from "./Toggle_out.module.css";

const Toggle_out = () => (
  <div>
    <div className={styles["checkbox"]}>
      <input className={styles["tgl"]} id="toggle" type="checkbox" />
      <label className={styles["tgl-btn"]} for="toggle"></label>
    </div>
  </div>
);

export default Toggle_out;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_out = () => (
         <div>
          <div className="checkbox">
  <input className="tgl" id="toggle" type="checkbox" />
  <label className="tgl-btn" for="toggle"></label>
</div>
        </div>
        );

        export default Toggle_out;
        
        
         */
}
