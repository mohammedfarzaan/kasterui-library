import React from "react";
import styles from "./Toggle_five.module.css";

const Toggle_five = () => (
  <div>
    <label className={styles["tgl"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Toggle_five;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_five = () => (
         <div>
          <label className="tgl">
    <input type="checkbox" />
    <span className="slider"></span>
</label>
        </div>
        );

        export default Toggle_five;
        
        
         */
}
