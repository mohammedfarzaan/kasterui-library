import React from "react";
import styles from "./Toggle_below.module.css";

const Toggle_below = () => (
  <div>
    <div className={styles["checkbox"]}>
      <input id="cbx" type="checkbox" />
      <label className={styles["toggle"]} for="cbx">
        <span></span>
      </label>
    </div>
  </div>
);

export default Toggle_below;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_below = () => (
         <div>
          <div className="checkbox">
  <input id="cbx" type="checkbox" />
  <label className="toggle" for="cbx"><span></span></label>
</div>
        </div>
        );

        export default Toggle_below;
        
        
         */
}
