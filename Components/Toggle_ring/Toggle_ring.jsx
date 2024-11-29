import React from "react";
import styles from "./Toggle_ring.module.css";

const Toggle_ring = () => (
  <div>
    <div className={styles["toggle-border"]}>
      <input id="one" type="checkbox" />
      <label for="one">
        <div className={styles["handle"]}></div>
      </label>
    </div>
  </div>
);

export default Toggle_ring;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_ring = () => (
         <div>
          <div className="toggle-border">
  <input id="one" type="checkbox" />
  <label for="one">
    <div className="handle"></div>
  </label>
</div>
        </div>
        );

        export default Toggle_ring;
        
        
         */
}
